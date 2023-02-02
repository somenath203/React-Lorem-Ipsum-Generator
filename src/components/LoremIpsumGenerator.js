import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { v4 as uuidv4 } from 'uuid';
import Tippy from '@tippyjs/react';

import data from './../data';


const LoremIpsumGenerator = () => {

    const { addToast } = useToasts();

    const [dispLoremText, setLoremDispText] = useState([]);

    const [noOfPara, setNoOfPara] = useState();

    const [isDispResult, setIsDispResultDiv] = useState();


    const onGenerateLoremPara = (e) => {

        setIsDispResultDiv(false);

        e.preventDefault();

        const noParaInt = parseInt(noOfPara);

        if (!noParaInt) {

            addToast(<p className='text-xl'>please enter the number of paragraphs</p>, {
                appearance: 'error',
                autoDismiss: true,
            });

        } else if (noParaInt < 1) {

            addToast(<p className='text-xl'>number of paragraphs cannot be less than 1</p>, {
                appearance: 'error',
                autoDismiss: true,
            });

        } else if (noParaInt > 8) {

            addToast(<p className='text-xl'>maximum number of paragraphs can be 8 only</p>, {
                appearance: 'error',
                autoDismiss: true,
            });

        } else {

            setLoremDispText(data.slice(0, noParaInt));

            addToast(<p className='text-xl'>your lorem ipsum is generated successfully</p>, {
                appearance: 'success',
                autoDismiss: true,
            });

            setIsDispResultDiv(true);

        }

    }

    const copyToClipboard = () => {

        navigator.clipboard.writeText(data.slice(0, noOfPara));

        addToast(<p className='text-xl'>lorem ipsum successfully copied to clipboard</p>, {
            appearance: 'success',
            autoDismiss: true,
        });

    };


    return (

        <div className="w-4/5 md:w-8/12 lg:w-2/5">


            <form className="flex flex-col gap-3 md:flex-row md:gap-7" onSubmit={onGenerateLoremPara}>
                <input
                    type="number"
                    className="border-none outline-none shadow-lg rounded-lg p-4 w-full"
                    placeholder='enter the number of paragraphs'
                    onChange={(e) => setNoOfPara(e.target.value)}

                />
                <button className="bg-blue-400 p-4 px-8 border-none outline-none shadow-lg rounded-lg text-white font-bold text-2xl tracking-wider hover:bg-blue-700 transition-all duration-500">Generate</button>
            </form>


            {isDispResult && <Tippy content='Copy to Clipboard'>
                <div
                    className='mt-20 mb-8 bg-blue-100 p-6 px-8 text-xl tracking-wide text-slate-900 outline-none border-none shadow-xl rounded-xl cursor-pointer'
                    onClick={copyToClipboard}
                >
                    {dispLoremText.map((data) => (
                        <div key={uuidv4()}>
                            <p>{data}</p>
                        </div>
                    ))}
                </div>
            </Tippy>}


            {!isDispResult && <div className='text-center mt-24 bg-blue-100 p-6 rounded-lg shadow-lg border-none outline-none text-xl font-sans tracking-wider text-black'>
                <i className="fa-solid fa-circle-info text-2xl"></i> <span>This lorem ipsum generator can only generate a maximum of 8 paragraphs only.</span>
            </div>}


        </div>
    )
};

export default LoremIpsumGenerator;