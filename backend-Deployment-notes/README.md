# Node js Backend Deployment process


## Backend Configuration:
   ---------------------

### Step 1: Set Up Backend on EC2

1. __Provision EC2 Instance:__ 

   - Launch an Amazon EC2 instance with Ubuntu as the OS.

     ![Image description](TravelMemory/backend-Deployment-notes/images/instances.png)

   - Open the necessary ports for the backend (port 3000) and Nginx (port 80) via Security Groups.
   
      ![Image description](TravelMemory/backend-Deployment-notes/images/backend-sg.png)
    
2. __Install Node.js and Git:__
   Connect to the EC2 instance via SSH or connect options  and run the following commands to install Node.js, npm, and Git:
   ```
   sudo apt update
   sudo apt install nodejs npm git net-tools -y
   ```
3. __Clone the TravelMemory Repository:__ Clone the TravelMemory repository from GitHub
   ```
   git clone git@github.com:Lucky-Hero-Vired-Projects/TravelMemory.git
   cd TravelMemory/backend/
   ```
4. __Install Backend Dependencies:__ Install the required dependencies for the backend:
   ```
   npm install
   ```
   ![Image description](TravelMemory/backend-Deployment-notes/images/backend_packages_install.png)

5. __Update .env file:__ Create a .env file and update it with database and other necessary configurations:
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
   ![Image description](TravelMemory/backend-Deployment-notes/images/backend_start.png)
   

### Step 2: Set Up Nginx as Reverse Proxy
__1. Install Nginx:__ 
  ```
  sudo apt install nginx -y
  ```
   ![Image description](TravelMemory/backend-Deployment-notes/images/nginx-status.png)

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
   ![Image description](TravelMemory/backend-Deployment-notes/images/nginx-test-status.png)

__4. Restart Backend server again:__ Restart the backend node.js in backend runinng mode
  ```
  npm start &
  ```
  
  ![Image description](TravelMemory/backend-Deployment-notes/images/backend-server-start-portstatus.png)
  

__Finally trying to access with public-ip:80__

  ![Image description](TravelMemory/backend-Deployment-notes/images/backend_browser-checking.png)