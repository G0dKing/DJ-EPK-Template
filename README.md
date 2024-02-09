# DJ-EPK (React Template) 
## v. 0.0.6   |    G0dking

## "Responsive, Full-stack, Single-Page Web-App + Authentication Template"

#### BUILT WITH:         
        Node.js - Express.js - React.js - Vite.js
        HTML5 - CSS - Javascript - MongoDB - Firebase


#### FORKED FROM: -  |   https://github.com/G0dKing/noted.git

#### -TODO: 
        -Add direct-links
        -Add install instructions for other distros
       

## I. INSTALLATION & USAGE

#### 1 . Download the source code from [Here], or clone the repository.
#### 2. Install Node.js:
        A. For Debian-Based Distros (Debian, Ubuntu, Kali, etc)
                ` cd dj-epk && sudo apt -y update && sudo apt upgrade -y && sudo apt install nodejs ` 
#### 3. Install Dependencies:
                ` npm install `
#### 4. Build and Deploy
        A. For a local development build:
                ` npm run dev `
        B. For production build and deployment:
                ` npm run build 
                  npm run serve `

## II. FILE STRUCTURE

1. root/
        ├── index.html
        ├── package.json
        ├── README.md
        ├── vite.config.js
   1.   └── src/
            └── App.jsx
            └── main.jsx
         1.      └──assets/
                        ── bgVid.mp4
                        ├── djVid.mp4
                        └── logo.png
         2.      └── comp/
                 1.     └── BookingForm/
                                ├── BookingForm.css
                                └── BookingForm.jsx
                 2.     └── BookNow/
                                ├── BookNow.css
                                └── BookNow.jsx
                 3.     └── CloseBtn/
                                ├── CloseBtn.css
                                └── CloseBtn.jsx
                 4.     └── Copyright/
                                ├── Copyright.css
                                └── Copyright.jsx
                 5.     └── Homepage/
                                ├── Homepage.css
                                └── Homepage.jsx
                 6.     └── ModalWrapper/
                                ├── ModalWrapper.css
                                └── ModalWrapper.jsx
                 7.     └── Music/
                                ├── Music.css
                                └── Music.jsx
                 8.     └── Navbar/
                                ├── Navbar.css
                                └── Navbar.jsx
