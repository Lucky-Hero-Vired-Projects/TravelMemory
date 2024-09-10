# Node js Backend Deployment process


## Backend Configuration:
   ---------------------

### Step 1: Set Up Backend on EC2

1. __Provision EC2 Instance:__ 

   - Launch an Amazon EC2 instance with Ubuntu as the OS.

     <img width="1432" alt="instances" src="https://github.com/user-attachments/assets/34fdb6da-88b2-43ca-bba5-740e986b5b68">

   - Open the necessary ports for the backend (port 3000) and Nginx (port 80) via Security Groups.
  
     <img width="1643" alt="backend-sg" src="https://github.com/user-attachments/assets/ef6da76a-c1a6-42b6-ab31-48f730c4549c">
    
3. __Install Node.js and Git:__
   Connect to the EC2 instance via SSH or connect options  and run the following commands to install Node.js, npm, and Git:
   ```
   sudo apt update
   sudo apt install nodejs npm git net-tools -y
   ```
4. __Clone the TravelMemory Repository:__ Clone the TravelMemory repository from GitHub
   ```
   git clone git@github.com:Lucky-Hero-Vired-Projects/TravelMemory.git
   cd TravelMemory/backend/
   ```
5. __Install Backend Dependencies:__ Install the required dependencies for the backend:
   ```
   npm install
   ```
   <img width="884" alt="backend_packages_install" src="https://github.com/user-attachments/assets/790d0c2b-28b8-479f-bfd9-e4eec7dffd8b">

6. __Update .env file:__ Create a .env file and update it with database and other necessary configurations:
   ```
   PORT=3000
   DATABASE_URL='mongodb+srv://lucky1225:<password>@lucky1225.eunoihl.mongodb.net/'
   ```
  
5. __Start the Backend Server:__ Before starting the backend server update package.json to point to index.js to start and use npm to start the server
   ```
   Update package.json
       {
        "name": "travelmemory-be",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
           "start": "node index.js",
           "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "Prashant Dey",
        "license": "ISC",
        "dependencies": {
           "cors": "^2.8.5",
           "dotenv": "^16.1.4",
           "express": "^4.18.2",
           "mongoose": "^7.2.4",
           "nodemon": "^2.0.22"
        }
    }

   ```
   
   ```
   npm install
   npm start
   ```
   <img width="714" alt="backend_start" src="https://github.com/user-attachments/assets/0d02b7e8-739a-4ff9-92c7-301fecfdfee3">

### Step 2: Set Up Nginx as Reverse Proxy
__1. Install Nginx:__ 
  ```
  sudo apt install nginx -y
  ```
   <img width="1193" alt="nginx-status" src="https://github.com/user-attachments/assets/953e30c7-f568-4251-8acf-d6ee068d5543">

__2. Configure Nginx for Reverse Proxy:__ Open the Nginx configuration file and add a new server block for the backend:
  ```
   vim /etc/nginx/sites-available/default
  ```
Add the following configuration:
  ```
  server {
    listen 80;
    server_name 54.245.32.220 ;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

  ```
__3. Re-Start Nginx:__ First the nginx config and Restart the nginx with above config 
   ```
   nginx -t
   systemctl restart nginx
   ```
   <img width="1188" alt="nginx-test-status" src="https://github.com/user-attachments/assets/01820718-9d76-427d-8315-f4b6ca536be8">

__4. Restart Backend server again:__ Restart the backend node.js in backend runinng mode
  ```
  npm start &
   
   or

   npm install -g pm2
   pm2 start index.js --name travelmemory-backend
   pm2 logs travelmemory-backend
   pm2 list
   pm2 startup    
  
  ```
  <img width="1020" alt="backend-server-start-portstatus" src="https://github.com/user-attachments/assets/51eec0b5-1a49-42af-865c-8bf8825de3ad">

__Finally trying to access with public-ip:80__

  <img width="1706" alt="backend_browser-checking" src="https://github.com/user-attachments/assets/a9e0581f-afb0-433f-9be5-1f404273760d">

