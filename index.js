// Add your code here



// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     });


function submitData(userName,userEmail){
    return fetch('http://localhost:3000/users',{
        'method':'POST',
        'headers':{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        'body':JSON.stringify({'name':userName,'email':userEmail})
    })
        .then(response=>response.json())
        .then(object=>document.querySelector('body').append(object.id))
        .catch(error=>document.querySelector('body').append(error.message))
}