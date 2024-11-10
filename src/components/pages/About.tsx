import React from 'react';
export const About: React.FC = () => {
     return (
          <div className="page mx-100">
               <div className='text-3xl text-center pb-4'>ABOUT US</div>
               <div className='font-light'>
                    <div className='whitespace-pre-line'>
                         Services for immigration (Singapore) is a Singapore registered company with
                         UEN: 53493267C and owned by Singaporeans. We are a strategic partner of
                         ICA (Immigration Checkpoints and Authority) and work with Immigration
                         Checkpoint &amp; Authority (ICA), Singapore. Our company provides immigration
                         services for individuals and companies operating at international business
                         destinations. As strategic partner of ICA, we work for our clients with
                         altogether success in fulfilling immigration services. Our services to clients are:
                    </div><br/>
                    <ul className='list-disc ml-6'>
                         <li>Visa</li>
                         <li>e-pass</li>
                         <li>Permanent residency (PR)</li>
                         <li>Singapore citizenship</li>
                         <li>Work permit</li>
                         <li>Employment pass</li>
                         <li>S-pass</li>
                         <li>Dependent pass</li>
                    </ul><br/>
                    <div className='whitespace-pre-line'>
                         Our experts are highly qualified and previously worked with immigration
                         services with ICA at grassroots levels in Singapore.
                    </div>
               </div>
          </div>
     )
}