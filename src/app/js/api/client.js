




export const request = async(url, options = {}) => {

  const res = await fetch(url, options);

  if(!res.ok) {
    throw new Error(`Failed request ${url}`);
  }

  return res.json();

}




