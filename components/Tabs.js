// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const { default: Axios } = require("axios");

const tabs = document.querySelector('.tabs')

function tabMaker(object){

    const tab = document.createElement('div')

    tab.classList.add('tab')

    tab.textContent = ` ${object}/` 

    return tab
}


Axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(response =>{ console.log(response)
        const topics = tabMaker(response.data['topics'])
        response.data['topics'].forEach(obj => {
            const theTab = tabMaker(obj)
            tabs.appendChild(theTab)
            debugger
        })
    })

    .catch(error =>{
        debugger
    })
