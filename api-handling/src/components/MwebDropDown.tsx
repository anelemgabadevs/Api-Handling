import React, {useState, useEffect, useRef, useImperativeHandle, forwardRef} from 'react';
import {useForm} from 'react-hook-form';
import MwebRegex from '@/app/utils/MwebRegex';

export interface IDropDownItems{
    fieldName: string;
    labelText:string;
    subType?: string;
    required:'yes'|'no';
    options:{value:string; optionLabel:string}[];
}

export interface IDropDownFieldValues{
    dropDownInputData: IDropDownItems[];
    handleFormSubmission:(FormData:any)=>void;
    isCtaEnabled:boolean;
    setIsCtaEnabled:(value:boolean)=>void;
}


    const MwebDropDown = forwardRef((props:IDropDownFieldValues, ref) => {

        const {dropDownInputData, handleFormSubmission, isCtaEnabled, setIsCtaEnabled} = props;
        const {register, handleSubmit, watch, formState:{errors}, trigger, setValue} = useForm();
        const formRef = useRef<HTMLFormElement>(null);

        const [focusedField, setFocusedField] = useState<string | null>(null);

        const hoverStyle = 'hover:border-mwPrimary-500 hover:outline-none hover:ring-4 hover:ring-mwLightTeal-200 hover:rounded-lg';
        const focusStyle = 'focus:border-mwPrimary-500 focus:outline-none focus:ring-4 focus:ring-mwLightTeal-200 focus:rounded-lg';
        const errorStyle = 'border-red-500 focus:border-red-500 hover:border-red-500 focus:ring-0 hover:ring-0 focus:border-red-500 focus:outline-none ';


        const Label = ({ labelText, fieldName }: { labelText: string, fieldName: string }) => {
            const fieldValue = watch(fieldName);
            const isFocused = focusedField === fieldName;
    
            return (
                <label
                    htmlFor={fieldName}
                    className={`absolute left-2 transition-all duration-300 ease-in-out pointer-events-none ${
                        isFocused || fieldValue ? 'top-1 text-mwTextParaXSmallSemi text-mwPrimary-900 ' : 'top-4 text-mwTextParaBaseSemi text-mwPrimary-900'
                    }`}
                >
                    {labelText || 'no label'}
                </label>
            );
        };

        const [isSubmitCTAEnabled, setIsSubmitCTAEnabled] = useState<boolean>(true);

        const allFields = watch();

        useEffect(()=>{
            const hasErrors = Object.keys(errors).length > 0;
            const allRequiredField = dropDownInputData.filter(item=>item.required === 'yes');
            const isallRequiredFieldsFilled = allRequiredField.every(item=>allFields[item.fieldName] && allFields[item.fieldName].trim() !=='');

            setIsCtaEnabled(hasErrors && !isallRequiredFieldsFilled)
        },[allFields,errors,dropDownInputData]);

        useImperativeHandle(ref, ()=>({
            submit: ()=>{
                if(formRef.current){
                    formRef.current.dispatchEvent(new Event('submit', {cancelable:true, bubbles:true}));
                }
            }
        }))


        return(
            <div className='w-full flex flex-col justify-center items-center'>
            <form ref={formRef} onSubmit={handleSubmit(handleFormSubmission)} className='w-full flex flex-col gap-8'>

            {dropDownInputData?.map((item, index) => (
                    <div className='relative w-full' key={index}>
                        {item.options ? (
                            <select
                                {...register(item.fieldName, {
                                    required: item.required === 'yes' ? 'This field is required' : false
                                })}
                                id={item.fieldName}
                                className={`rounded-lg p-2 pt-6 w-full text-black border ${errors[item.fieldName] ? errorStyle : `border-mwLightTeal-100 ${hoverStyle} ${focusStyle}`} `}
                                onFocus={() => setFocusedField(item.fieldName)}
                                onBlur={async () => {
                                    setFocusedField(null);
                                    await trigger(item.fieldName);
                                }}
                                onChange={async (e) => {
                                    setValue(item.fieldName, e.target.value);
                                    e.target.value === '' || null ? setIsSubmitCTAEnabled(true) : false;
                                    await trigger(item.fieldName);
                                }}
                            >
                                <option value="">Select an option</option>
                                {item.options.map((option, optionIndex) => (
                                    <option key={optionIndex} value={option.value}>
                                        {option.optionLabel}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                {...register(item.fieldName, {
                                    required: item.required === 'yes' ? 'This field is required' : false,
                                })}
                                id={item.fieldName}
                                className={`rounded-lg p-2 pt-6 w-full text-black border ${errors[item.fieldName] ? errorStyle : `border-mwLightTeal-100 ${hoverStyle} ${focusStyle}`} `}
                                onFocus={() => setFocusedField(item.fieldName)}
                                onBlur={async () => {
                                    setFocusedField(null);
                                    await trigger(item.fieldName);
                                }}
                                onChange={async (e) => {
                                    setValue(item.fieldName, e.target.value);
                                    e.target.value === '' || null ? setIsSubmitCTAEnabled(true) : false;
                                    await trigger(item.fieldName);
                                }}
                            />
                        )}
                        <Label labelText={item.labelText} fieldName={item.fieldName} />
                        {errors[item.fieldName] && <p className='text-red-500 text-sm mt-4'>{errors[item.fieldName]?.message as string}</p>}
                    </div>
                ))}
                
                <div className='w-full flex flex-col justify-center items-center align-center text-center'>
                    <input
                        className={`flex flex-col p-4 ${isCtaEnabled ? 'bg-mwPrimary-900 opacity-[50%] cursor-not-allowed hover:bg-mwPrimary-900' : ''} rounded-xl w-full text-center justify-center items-center bg-mwPrimary-900 cursor-pointer hover:bg-mwLightTeal-900`}
                        type='submit'
                        name='Submit'
                        value='Continue To Payment'
                        disabled={isCtaEnabled}
                        style={{display:'none'}}
                    />
                </div>
            </form>
        </div>

        );

    })

    export default MwebDropDown;


