const sendDataToServer = async (formData) => {
    console.log(formData);
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: formData,
            }),
        });
    
        if (response.ok) {
            console.log('DataFetch succesfull!')
            return true;
        } else {
            console.log('Some error fuck!')
            return false
        }
    }

    catch (error) {
        console.error("Error:", error);
    }
};

export default sendDataToServer;