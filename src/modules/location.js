export default function displayLocation(obj) {
    return obj.then((data) => {
    const main = document.querySelector(".location-container");
    const locationConditionDiv = document.createElement("div");
    main.textContent = ""

    const {location} = data
        

    locationConditionDiv.classList.add("location-condition");

    // main.textContent = "";

     

    const dataKeys = Object.keys(location);
  
    const dataValues = Object.values(location);

    const nameData = dataKeys.splice(0, 3);

    const locationData = dataValues.splice(0, 3);
    

    for (let i = 0; i < locationData.length; i += 1) {
        const div = document.createElement("div");

        div.classList.add(`${nameData[i]}`);
        div.textContent = locationData[i];
       
        locationConditionDiv.appendChild(div);
    }
    main.appendChild(locationConditionDiv);
     })
  }
  

// export default async function displayLocation(obj) {
//     try {
//         const weatherObj = await obj;

//         const {location} = weatherObj

//         const main = document.querySelector(".top");
//         const locationConditionDiv = document.createElement("div");
    
//         locationConditionDiv.classList.add("location");
    
//         main.textContent = "";
    
         
    
//         const dataKeys = Object.keys(location);
      
//         const dataValues = Object.values(location);
    
//         const nameData = dataKeys.splice(0, 3);
    
//         const locationData = dataValues.splice(0, 3);
    
//         for (let i = 0; i < locationData.length; i += 1) {
//             const div = document.createElement("div");
    
//             div.classList.add(`${nameData[i]}`);
//             div.textContent = locationData[i];
    
//             locationConditionDiv.appendChild(div);
//         }
//         main.appendChild(locationConditionDiv);

//         // console.log(weatherObj)
//     } catch (err) {
//         console.log(err)
//     }
//   }

