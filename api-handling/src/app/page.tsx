'use client'
import React, { useRef } from 'react';
import { useState } from 'react';
import MwebTextInput, { iInputFieldItems } from '@/components/MwebTextInput';
import MwebDropDown, {IDropDownItems} from '@/components/MwebDropDown';
export default function MainPage() {

    // formRef to use in reffencing the submit form function in the chil copmponent
    const formRef = useRef<{ submit: () => void }>(null);

    //trigger function for triggering the submit functionality thats in the child component
    const triggerSubmit = () => {
        if (formRef.current) {
            formRef.current.submit();
        }
    };

    // button state based on validation
    const [isCtaEnabled,setIsCtaEnabled]= useState<boolean>(true);

    //array of input field items
    const inputData: iInputFieldItems[] = [
        {
            fieldName: 'firstName',
            labelText: 'First Name',
            subType: 'name',
            required:'yes'
        },
        {
            fieldName: 'Surname',
            labelText: 'Surname',
            subType: 'name',
            required:'yes',
        },
        {
            fieldName: 'mobileNumber',
            labelText: 'Mobile Number',
            subType: 'mobileNumber',
            required: 'yes'
        },
        {
            fieldName: 'idNumber',
            labelText: 'ID Number',
            subType: 'id',
            required:'no'
        }
    ];

    const dropDownInputData: IDropDownItems[] = [
        {
            fieldName: 'province',
            labelText: 'Select Province',
            subType: 'null',
            required:'no',
            options:[
                {value:'Western Cape',optionLabel:'Western Cape'},
                {value:'Gauteng',optionLabel:'Gauteng'},
                {value:'Limpompo',optionLabel:'Limpompo'},
            ]
        }
    ]

    //the function that is passed to the react hook form built in onSubmit function that recives the user input data
    function HandleFormSubmission(formData: any) {
        console.log('user details:', formData);
    }

    return (
        <div className='flex flex-col w-full h-screen bg-white justify-center items-center p-8 xl:p-16 gap-6'>
            <div className='text-black font-bold'>Your Details Page</div>
            <div className='w-full flex lg:flex-row p-6  gap-6'>
                
                <div className='w-full flex flex-col justify-center items-center align-center gap-6'>
                    
                        <MwebTextInput ref={formRef} inputData={inputData} handleFormSubmission={HandleFormSubmission as any} isCtaEnabled={isCtaEnabled} setIsCtaEnabled={setIsCtaEnabled}/>
                        {/* <MwebDropDown ref={formRef} dropDownInputData={dropDownInputData} handleFormSubmission={HandleFormSubmission as any} isCtaEnabled={isCtaEnabled} setIsCtaEnabled={setIsCtaEnabled}/> */}
                    </div>
                <div className='w-full flex flex-col gap-6'>
                    <div className={`w-full flex ${isCtaEnabled ?'bg-mwPrimary-900' : 'bg-mwLightTeal-900'} h-[200px] rounded-lg`}>

                    </div>
                    <button
                        onClick={triggerSubmit}
                        className={`flex flex-col p-4 h-max ${isCtaEnabled ? 'bg-mwPrimary-900 opacity-[50%] cursor-not-allowed hover:bg-mwPrimary-900' : ''} rounded-xl w-full text-center justify-center items-center bg-mwPrimary-900 cursor-pointer hover:bg-mwLightTeal-900`}
                        disabled={isCtaEnabled}
                    >
                    Continue to payment
                    </button>
                </div>
               
            </div>
        </div>
    );
}
