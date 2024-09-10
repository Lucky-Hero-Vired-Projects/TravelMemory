# Travel Memory

`.env` file to work with the backend after creating a database in mongodb: 

```
MONGO_URI='ENTER_YOUR_URL'
PORT=3001
```

Data format to be added: 

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

__Task 4: Scaling the Application with Load Balancer:__

- __Launch Additional EC2 Instances:__ Create multiple EC2 instances running both the frontend and backend of the TravelMemory application.

- __Set Up Load Balancer:__ Use AWS Elastic Load Balancer (ELB) to distribute traffic across your EC2 instances:

- Go to the EC2 Dashboard and click Load Balancers.
- Create a new Application Load Balancer.
- Add all the instances running the backend under the Target Group.
- Configure Load Balancer Listener: Set the listener to forward traffic to your EC2 instances on port 80 (Nginx proxy).

![Image description](TravelMemory/frontend-deployment-notes/images/LB.png)
