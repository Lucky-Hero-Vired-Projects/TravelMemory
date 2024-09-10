# Node js Frontend Deployment process

## Frontend and Backend Connection
----------------------------------
__1. Provision EC2 Instance:__ 

   - Launch an Amazon EC2 instance with Ubuntu as the OS.

  <img width="1432" alt="instances" src="https://github.com/user-attachments/assets/6d85c16f-5378-474f-9e0b-3e96be36b85a">

__2. Install Node.js and Git:__
   Connect to the EC2 instance via SSH or connect options  and run the following commands to install Node.js, npm, and Git:
   ```
   sudo apt update
   sudo apt install nodejs npm git net-tools -y
   ```

__3. Clone the TravelMemory Repository:__ Clone the TravelMemory repository from GitHub
   ```
   git clone git@github.com:Lucky-Hero-Vired-Projects/TravelMemory.git
   cd TravelMemory/frontend
   ```

__4. Update url.js file:__  update in urls.js with backend url
   ```
   Replace http://localhost:3001 to http://<backend-serverip>:<port-number>
   ```

__5. Install Frontend Dependencies and Build:__ 
  ```
  npm install
  npm run build
  ```
  <img width="1646" alt="npm-install" src="https://github.com/user-attachments/assets/05c5cc25-ad7f-4852-88a0-42af02a37cba">

  <img width="1302" alt="npm-build" src="https://github.com/user-attachments/assets/c4fd77ac-6b4e-4ee1-96e7-72403d33a392">

__6. Deploy Frontend Using Nginx:__  Deploy a React application using Nginx proxy

  - Install Nginx: Install nginx and do necessary config to run frontend
   ```
   apt install nginx -y
   ```
  - Nginx config: 
    ```
    vim /etc/nginx/sites-available/default

    server {
    listen 80;
    server_name 54.244.180.159;

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
  - Test and Restart the Nginx:
   ```
   nginx -t
   systemctl restart nginx
   ```
    <img width="1187" alt="frontend-nginx-status" src="https://github.com/user-attachments/assets/c660eabf-3f18-40f9-964f-3765454e53d3">

__7. Start the Frontend:__ 
   ```
    npm start &
   ```
   <img width="505" alt="frontend-start" src="https://github.com/user-attachments/assets/a052f63b-b80d-4c73-8aeb-f99d2073b9f1">

__8. Access fron Browser:__ After starting the react server, can login from browser with nginx ip address:port number

   <img width="1636" alt="frontend-ui" src="https://github.com/user-attachments/assets/dde7698f-2989-47ea-986e-a4ac425cdca7">
   <img width="1707" alt="frontend-ui1" src="https://github.com/user-attachments/assets/bb5f7862-12fb-40b8-b0bb-c22e5abb3bd2">

