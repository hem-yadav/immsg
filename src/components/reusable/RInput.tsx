import React, { useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Input } from '@headlessui/react';
import clsx from 'clsx'
import { Fragment } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


//@ts-ignore
export const RInput = ({ handleChange, icon, placeholder }) => {
    const onChange = (e: any) => {
        handleChange?.();
    }

    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 500);
    }, []);
    
    useEffect(() => {
    return () => {
        debouncedResults.cancel();
    };
    });

    return (
        <Input 
            //@ts-ignore
            type="text" name="full_name" as={Fragment}>
            {({ focus, hover }) => <div className='flex justify-center items-center'><MagnifyingGlassIcon className="block h-4 w-4 text-white group-data-[open]:hidden"/><input onChange={onChange} placeholder={placeholder} className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )} /></div>}
        </Input>
    )
}