# **Deploy React App on EKS with Fargate**

### **1\. Prerequisites**

Ensure you have:

1. **React Application** ready for deployment.
2. **AWS CLI** configured with appropriate permissions.
3. **kubectl** and **[eksctl](https://eksctl.io/installation/)** installed.
4. **Docker** installed for containerizing the app.

---

### **2\. Clone the Repository**

Clone the `chore-docker-setup` branch of the repository:

```bash
git clone -b chore-docker-setup https://github.com/aragakerubo/sunnyside-agency.git
cd sunnyside-agency
```

---

### **3\. Build and Push the Docker Image**

1. **Build the Docker Image**: The project should have a `Dockerfile`. We can go ahead and build an image from this:
   
    ```bash
   docker build -t sunnyside-react-app .
    ```
    
2. **Push to Amazon Elastic Container Registry (ECR)**:
    
    - Authenticate to ECR:
        
        ```bash
        aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <your-account-id>.dkr.ecr.<your-region>.amazonaws.com
        ```
        
    - Create an ECR repository:
        
        ```bash        
        aws ecr create-repository --repository-name sunnyside-react-app
        ```
        
    - Tag and push the image:
        
        ```bash
        docker tag sunnyside-react-app:latest <your-account-id>.dkr.ecr.<your-region>.amazonaws.com/sunnyside-react-app:latest
        docker push <your-account-id>.dkr.ecr.<your-region>.amazonaws.com/sunnyside-react-app:latest
        ```
        

---

### **4\. Set Up EKS with Fargate**

#### Create an EKS Cluster with Fargate

Use `eksctl` to create an EKS cluster with the name `sunnyside-react-eks-cluster`:

```bash
eksctl create cluster \
--name sunnyside-react-eks-cluster \
--region <your-region> \
--fargate
```

This command:

- Creates a new EKS cluster named `sunnyside-react-eks-cluster`.
- Enables Fargate for serverless container management.

Confirm the cluster is running:

```bash
eksctl get cluster --name sunnyside-react-eks-cluster
```

---

### **5\. Deploy the React App to EKS**

#### Edit the Kubernetes Deployment File

  - **Edit the `deployment.yaml` file**: Paste in the image URI from AWS ECR
    
    ```yaml
    spec:
      containers:
      - name: react-app
        image: <your-account-id>.dkr.ecr.<your-region>.amazonaws.com/sunnyside-react-app:latest
        ports:
        - containerPort: 80
    ```
    

---

#### Apply the Configurations

1. Deploy the React app to Kubernetes:
    
    ```bash    
    kubectl apply -f deployment.yaml
    ```
    
2. Expose the service using a load balancer:
    
    ```bash    
    kubectl apply -f service.yaml
    ```
    
3. Verify the deployment and service:
    
    ```bash    
    kubectl get pods
    kubectl get services
    ```
    

---

### **6\. Access the Application**

Once the LoadBalancer is ready, retrieve its external IP:

```bash
kubectl get service react-app-service
```

Open the external IP in your browser to access the React app.

---

### **7\. Clean Up Resources**

To avoid incurring charges, delete the resources when you're done:

```bash
eksctl delete cluster --name sunnyside-react-eks-cluster
```

---

### **8\. Optional Enhancements**

- **Custom Domain**: Use **AWS Route 53** to map the LoadBalancer to a custom domain.
- **SSL**: Integrate **AWS Certificate Manager (ACM)** for HTTPS.
- **CI/CD Pipeline**: Automate deployment with **AWS CodePipeline** or GitHub Actions.
