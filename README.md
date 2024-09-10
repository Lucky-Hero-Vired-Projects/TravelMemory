# Travel Memory

`.env` file to work with the backend after creating a database in mongodb: 

```
MONGO_URI='ENTER_YOUR_URL'
PORT=3001
```

Add this data into DB, Data format to be added: 

```json
{
    "tripName": "Incredible India",
    "startDateOfJourney": "19-03-2022",
    "endDateOfJourney": "27-03-2022",
    "nameOfHotels":"Hotel Namaste, Backpackers Club",
    "placesVisited":"Delhi, Kolkata, Chennai, Mumbai",
    "totalCost": 800000,
    "tripType": "leisure",
    "experience": "Lorem Ipsum, Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum, ",
    "image": "https://t3.ftcdn.net/jpg/03/04/85/26/360_F_304852693_nSOn9KvUgafgvZ6wM0CNaULYUa7xXBkA.jpg",
    "shortDescription":"India is a wonderful country with rich culture and good people.",
    "featured": true
}
```

### From Backend application confoguration see the readme.md page in backend-Deployement-notes

### From frontend application confoguration see the readme.md page in frontend-Deployement-notes

__Task : Scaling the Application with Load Balancer:__

- __Launch Additional EC2 Instances:__ Create multiple EC2 instances running both the frontend and backend of the TravelMemory application.

- __Set Up Load Balancer:__ Use AWS Elastic Load Balancer (ELB) to distribute traffic across your EC2 instances:

- Go to the EC2 Dashboard and click on Target Groups and Create Target Groups.
- Go to the EC2 Dashboard and click on Load Balancer and Create Load Balancers.
- Create a new Application Load Balancer.
- Add all the instances running the backend under the Target Group.
- Configure Load Balancer Listener: Set the listener to forward traffic to your EC2 instances on port 80 (Nginx proxy).

  <img width="1433" alt="tg" src="https://github.com/user-attachments/assets/d59f0fc7-acb5-4f91-9f9b-f60089f0b7bf">

  <img width="1452" alt="LB" src="https://github.com/user-attachments/assets/f52276bd-d3dd-45c4-94b8-b21d747191a9">

__Task 4. Domain Setup with Cloudflare:__

 - Instead of Cloudflare I have used infinityfree.com for free DNS (https://dash.infinityfree.com/)
 - Signup the infinityfree website and activate
 - Click on Account and click on DNS records
 - Choose Create new Recoed and load Balancer dns
 - try to login with new cname.
   
<img width="1443" alt="infinityfree" src="https://github.com/user-attachments/assets/584170d3-5c2d-47ee-bd3b-d46dac7639e3">

<img width="1602" alt="dns" src="https://github.com/user-attachments/assets/f11818f9-2287-4df0-9336-713a6b72c84b">


 

 
