<div align="center">
    <h1>Caesar Cipher</h1> 
    <p>Welcome to the Caesar Cipher App! This is a simple yet powerful tool that allows you to encrypt and decrypt text using the Caesar cipher technique. The Caesar cipher involves shifting letters by a certain number of positions within the same alphabet. This project supports both English and Russian languages, and the language of the app is automatically determined by your browser settings.</p>

![#Laurel Leaves](https://i.postimg.cc/qRXhPyhk/logo.png)
</div>
## Features
-   **Language Detection**: The app automatically detects the language of your browser and adjusts its user interface to be either in English or Russian accordingly.
    
-   **Encryption and Decryption**: You can easily encrypt and decrypt text using the Caesar cipher. The app maintains the original alphabet of the text, ensuring that the encrypted message has the same character set.
    
-   **Custom Alphabets**: In addition to the default alphabets (English and Russian), you have the flexibility to choose or even upload your own custom alphabets for encryption and decryption. Detailed instructions for creating a custom alphabet are provided when you choose to upload one.

## Getting Started
### Option 1: Webpack
1.  Clone this repository to your local machine.    
    `git clone https://github.com/JulKoroleva/CaesarCipher.git` 
    
2.  Navigate to the project directory.
    `cd CaesarCipher`
    
3.  Install the required dependencies using npm or yarn.
`npm install` **or** `yarn install`.
    
4.  Start the development server using the provided npm script.
 `npm run dev`.
5. Open your web browser and go to `http://localhost:8080` to access the Caesar Cipher app.

  ### Option 2: Docker

1.  Install Docker on your system by following the instructions provided on the [Docker website](https://docs.docker.com/get-docker/).
    
2.  Clone this repository to your local machine.
  `git clone https://github.com/JulKoroleva/CaesarCipher.git` 
  
3. Navigate to the project directory.
    `cd CaesarCipher`
 4. Build the Docker image for the Caesar Cipher app.
 `docker build -t caesar-cipher-app .`
 5. Run the Docker container with the built image.
 `docker run -p 8080:80 caesar-cipher-app`
 6. Open your web browser and go to `http://localhost:8080` to access the Caesar Cipher app.

## About Caesar Cipher
The Caesar cipher is one of the simplest and oldest encryption techniques. It works by shifting each letter in the plaintext by a fixed number of positions down or up the alphabet. This app preserves the original alphabet of the text, ensuring that both the encryption and decryption maintain the same character set.

## Browser Compatibility
The Caesar Cipher app is designed to work across a wide range of modern web browsers. It dynamically adapts its language to match your browser's settings, making it accessible and user-friendly.

## Feedback and Contributions
If you have any suggestions, feedback, or would like to contribute to this project, please feel free to [open an issue](https://github.com/JulKoroleva/CaesarCipher/issues) or [submit a pull request](https://github.com/JulKoroleva/CaesarCipher/pulls). I appreciate your input!

*Thank you for checking out the Caesar Cipher app! We hope you find it useful and enjoy experimenting with this classic encryption technique. If you have any questions, feel free to reach out to me.*
![#Laurel Leaves](https://i.postimg.cc/9fMnRQpY/divider-6752864-1920.png)
