'use client'
import MainCard from "@/components/MainCard";
import React, { useState, useEffect } from 'react';

export default function MainPage() {
  const [apiResponseData, setApiResponseData] = useState<any>(null);
  const [errorDisplay,setErrorDisplay] = useState<any>(false)
  const [showErrorDiv, setShowErrorDiv] = useState<any>(false)

  // Creating an array of objects to hold state for each card
  const [cardStates, setCardStates] = useState<any[]>([
    { responseStatus: '', responseDescription: '', textColor:'', ctaText:'FireApiCall', isLoading: false },
    { responseStatus: '', responseDescription: '',  textColor:'', ctaText:'FireApiCall', isLoading: false },
    { responseStatus: '', responseDescription: '' ,  textColor:'', ctaText:'FireApiCall', isLoading: false },
    { responseStatus: '', responseDescription: '' ,  textColor:'', ctaText:'FireApiCall', isLoading: false },
    { responseStatus: '', responseDescription: '',  textColor:'', ctaText:'FireApiCall', isLoading: false },
    { responseStatus: '', responseDescription: '' ,  textColor:'', ctaText:'FireApiCall', isLoading: false },
  ]);

  const LoadingSpinner = () =>{
    return (
      <div
      className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
    </div>
    )
  }

  // Reusable async function for specific API calls
  async function HandleGlobalApiRequest(url: string, index: number) {
    try {
      // Setting loading to true for the specific card at the start of the handleclick function
      setCardStates((prevStates) => [
        ...prevStates.slice(0, index),
        { ...prevStates[index], isLoading: true },
        ...prevStates.slice(index + 1),
      ]);

      const apiResponse = await fetch(url, {
        headers: {
          Accept: 'application/json',
        },
      });

      const loadingText = cardStates[index].isLoading ? '.....' : 'FireApiCall';

      if (!apiResponse.ok) {
        const responseData = await apiResponse.json();

        // Updating card states
        setCardStates((prevStates) => [
          ...prevStates.slice(0, index),
          {
            responseStatus: apiResponse.status,
            responseDescription: responseData.description,
            textColor: 'text-red-600 font-600',
            ctaText: loadingText,
            isLoading: false, // Seting loading to false after the API call is completed
          },
          ...prevStates.slice(index + 1),
        ]);
      } else {
        const responseData = await apiResponse.json();

        // Updating card states
        setCardStates((prevStates) => [
          ...prevStates.slice(0, index),
          {
            responseStatus: apiResponse.status,
            responseDescription: responseData.description,
            textColor: 'text-green-600 font-600',
            ctaText: loadingText,
            isLoading: false, // Setting loading to false after the API call is completed
          },
          ...prevStates.slice(index + 1),
        ]);

        const data = await apiResponse.json();
        setApiResponseData(data);
      }
    } catch (error) {
      setErrorDisplay(true)
      console.log('The following error occurred: ', error);
      setCardStates((prevStates) => [
        ...prevStates.slice(0, index),
        {
          ctaText: 'FireApiCall',
          isLoading: false, // Settting loading to false when there is an error
        },
        ...prevStates.slice(index + 1),
      ]);
      throw error;
    }
  }

  const handleIndividualApiCall = async (url: string, index: number) => {
    try {
      await HandleGlobalApiRequest(url, index);
      console.log(apiResponseData);
    } catch (error) {
      console.log('An error occurred');
      setErrorDisplay(true)
      setCardStates((prevStates) => [
        ...prevStates.slice(0, index),
        {
          ctaText: 'FireApiCall',
          isLoading: false, // Settting loading to false when there is an error
        },
        ...prevStates.slice(index + 1),
      ]);
    }
  };

  useEffect(() => {
    errorDisplay === true? setShowErrorDiv(true) : setShowErrorDiv(false)
  });

  const cardData: any = [
    { title: 'Handling 200 OK', ctaText: 'Fire API Call', url: 'https://httpstat.us/200' },
    { title: 'Handling 200 OK with 10sec delay', ctaText: 'Fire API Call', url: 'https://httpstat.us/200?sleep=10000' },
    { title: 'Handling 400 Bad Request', ctaText: 'Fire API Call', url: 'https://httpstat.us/400' },
    { title: 'Handling 404 Not Found ', ctaText: 'Fire API Call', url: 'https://httpstat.us/404' },
    { title: 'Handling 500 Internal Server Error', ctaText: 'Fire API Call', url: 'https://httpstat.us/500' },
    { title: 'Handling 504 Gateway Timeout', ctaText: 'Fire API Call', url: 'https://httpstat.us/504' },
  ];

  const errorText = 'An error occurred';

  const ErrorDiv = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center  justify-center">
        <div className="z-50 w-[300px] h-[300px] bg-white rounded-2xl p-4 items-center ring-2 ring-blue-400 justify-center p-10">
          <div className="text-red-600 text-lg text-center">An error occurred, This is either there was a time out or the server of the api/service was unavailable</div>

          <div className=" w-full flex flex-col justify-center self-center pt-6">
            <button className="flex flex-col text-center justify-center ring-4 ring-pink-300 items-center bg-blue-600 rounded-2xl p-4"
            onClick={()=>{setErrorDisplay(false); setShowErrorDiv(false)}}
            >Go back</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-row w-full h-full flex-wrap justify-center bg-white items-center lg:px-48 lg:py-16">
      {showErrorDiv===true? <ErrorDiv/> : <></>}
      {cardData.map((cardItem: any, index: number) => (
        <div key={`card-items-${index}`} className="flex flex-col md:flex-row flex-wrap gap-y-4 gap-x-4 p-4">
          <MainCard
            title={cardItem.title}
            errorText={errorText}
            CtaText={cardStates[index].isLoading ? <LoadingSpinner/> : cardStates[index].ctaText}
            onClickFunction={() => handleIndividualApiCall(cardItem.url, index)}
            responseDescription={cardStates[index].responseDescription}
            responseStatus={cardStates[index].responseStatus}
            textColor={cardStates[index].textColor}
          />
        </div>
      ))}
    </div>
  );
}
