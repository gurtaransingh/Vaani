const listenBtn = document.getElementById('listen_backend')

listenBtn.addEventListener('click', async()=>{

    try{
        const text = document.getElementById('text-input').value;
        fetch('https://d38d-112-196-126-3.ngrok-free.app/synthesize', {
            method: 'POST',
            body: JSON.stringify({ text }), // Include the necessary data in the request body
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            if (response.ok) {
              return response.blob();
            } else {
              throw new Error('Network response was not ok');
            }
          })
          .then(blob => {
            // Create a blob URL from the response data
            const audioUrl = URL.createObjectURL(blob);
          
            // Create an <audio> element and set its source
            const audioElement = new Audio(audioUrl);
          
            // Play the audio
            audioElement.play();
          })
          .catch(error => {
            console.error('Error:', error);
          });
          
        // const text = document.getElementById('text-input').value;
        // const response = await axios.post('http://4.240.66.128:8700/synthesize', {text});
        // // console.log(response.data)
        // // console.log(response.data)
        // const audioData = response.data; // Assuming it contains the audio data
        // const audioBlob = new Blob([audioData]);
        
        // const audioUrl = URL.createObjectURL(audioBlob);
        
        // const audioElement = new Audio(audioUrl);
        
        // audioElement.play();
    }
    catch(err){
        console.log("Error: ", err)
    }

})

// async function synthesizeText() {
//     const text = document.getElementById('text-input').value;
//     const response = await fetch('http://4.240.66.128:8700/synthesize', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ text: text })
//     });
    
//     if (response.ok) {
//         const blob = await response.blob();
//         const audioUrl = URL.createObjectURL(blob);
//         document.getElementById('audio-player').src = audioUrl;
//     } else {
//         console.error('Error:', response.status, await response.text());
//     }
// }
