import React, { useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Input } from '@headlessui/react';
import clsx from 'clsx'
import { Fragment } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


//@ts-ignore
export const RInput = ({ handleChange, icon: Icon, placeholder }) => {
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
            {({ focus, hover }) => <div className='flex justify-center border border-gray-1 items-center bg-white/5 rounded-lg px-3'>
            <MagnifyingGlassIcon className="block h-4 w-4 text-gray-2 group-data-[open]:hidden"/>
            <input onChange={onChange} placeholder={placeholder} className={clsx(
            'block w-full rounded-lg border-none bg-transparent py-1.5 px-1.5 text-sm/6',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )} />
            </div>}
        </Input>
    )
}