const getLocalData = (key) => {
    if (key) {
      const data = localStorage.getItem(key);
      return data;
    }
  };
  
  const saveLocalData = (key, value) => {
    if (key && value) {
      localStorage.setItem(key, value);
    }
  };
  
   const removeData= (key)=> {
    if(key){
        localStorage.removeItem(key);
    }
}

  export { getLocalData, saveLocalData, removeData };
  