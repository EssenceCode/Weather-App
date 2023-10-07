export default function displayCondition(obj) {
    return obj.then((data) => {
    const main = document.querySelector(".cloud-container");
    const cloudConditionDiv = document.createElement("div");
    cloudConditionDiv.classList.add("cloud-condition");
    main.textContent = ""
    
        
        const {current} = data;
     
        const {condition} = current
       

       

        const conditionText = condition.text
        const conditionImg = condition.icon
        
        const div = document.createElement("div")
        div.classList.add("weather")
        const img = document.createElement("img")
      
        div.textContent = conditionText
        img.src = conditionImg


        cloudConditionDiv.appendChild(div)
        cloudConditionDiv.appendChild(img)

        main.appendChild(cloudConditionDiv)
    })
    .catch((err) => console.log(err));

}
