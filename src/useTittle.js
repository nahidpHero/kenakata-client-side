import React, { useEffect } from 'react';

const useTittle = (title) => {
   useEffect(()=>{
    document.title=title;
   },[title])
};

export default useTittle;