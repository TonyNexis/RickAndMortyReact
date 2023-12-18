const sendDataToServer = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
        throw new Error("error")
    }

    const data = await response.json();
    console.log(data)


    // try {
    //     const response = await fetch("data.json", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             users: formData,
    //         }),
    //     });
    
    //     if (response.ok) {
    //         console.log('DataFetch succesfull!')
    //         return true;
    //     } else {
    //         console.log('Some error fuck!')
    //         return false
    //     }
    // }

    // catch (error) {
    //     console.error("Error:", error);
    // }
};

export default sendDataToServer;