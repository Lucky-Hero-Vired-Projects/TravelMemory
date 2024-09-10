# Node js Frontend Deployment process

## Frontend and Backend Connection
----------------------------------
__1. Provision EC2 Instance:__ 

   - Launch an Amazon EC2 instance with Ubuntu as the OS.

     ![Image description](TravelMemory/frontend-deployment-notes/images/instances.png)

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
  ![Image description](TravelMemory/frontend-deployment-notes/images/npm-install.png)

  ![Image description](TravelMemory/frontend-deployment-notes/images/npm-build.png)

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
    ![Image description](TravelMemory/frontend-deployment-notes/images/frontend-nginx-status.png)

__7. Start the Frontend:__ 
   ```
    npm start &
   ```
   ![alt text](TravelMemory/frontend-deployment-notes/images/frontend-start.png)
    
__8. Access fron Browser:__ After starting the react server, can login from browser with nginx ip address:port number

   ![Image description](TravelMemory/frontend-deployment-notes/images/frontend-ui.png)