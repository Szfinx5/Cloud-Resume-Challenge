# Step by Step tasks of the Cloud Resume Challenge
You can find my detailed blog about the solution by <a href="https://dev.to/ghavasi/the-cloud-resume-challenge-2i8f"> clicking here.</a>


## 1. Certification 
   
Your resume needs to have the AWS Cloud Practitioner certification on it.   
I have passed the AWS Certified Cloud Practicioner exam on the 31. July.     
 :white_check_mark: **_Completed on 31. July 2022_**     
 

## 2. HTML 
Your resume needs to be written in HTML. Not a Word doc, not a PDF.       
 :white_check_mark: **_Completed on 05. August 2022_**  

## 3. CSS
Your resume needs to be styled with CSS.    
 :white_check_mark: **_Completed on 06. August 2022_**

## 4. Static Website
Your HTML resume should be deployed online as an Amazon S3 static website, use S3.    
 :heavy_check_mark: **_Completed on 07. August 2022_**
 :white_check_mark: **_Re-done by AWS CLI on 25. August 2022_** 
 
## 5. HTTPS
The S3 website URL should use HTTPS for security. You will need to use Amazon CloudFront to help with this.     
:heavy_check_mark: **_Completed on 07. August 2022_**
:white_check_mark: **_Re-done by AWS SAM on 26. August 2022_** 

## 6. DNS
Point a custom DNS domain name to the CloudFront distribution, so your resume can be accessed at something like my-c00l-resume-website.com. You can use Amazon Route 53 or any other DNS provider for this.     
:heavy_check_mark: **_Completed on 07. August 2022_** :
:white_check_mark: **_Re-done by AWS SAM on 26. August 2022_** 

## 7. Javascript
Your resume webpage should include a visitor counter that displays how many people have accessed the site. You will need to write a bit of Javascript to make this happen.    
:white_check_mark: **_Completed on 10. August 2022_**

## 8. Database
The visitor counter will need to retrieve and update its count in a database somewhere. It is suggested to use Amazon’s DynamoDB for this.     
 ✔️_check_mark: **_Completed on 08. August 2022_**
 :white_check_mark: **_Re-done by AWS SAM on 26. August 2022_** 

## 9. APIAugust
Do not communicate directly with DynamoDB from your Javascript code. Instead, you will need to create an API that accepts requests from your web app and communicates with the database. It is suggested to use AWS’s API Gateway and Lambda services for this.     
:heavy_check_mark: **_Completed on 11. August 2022_**
:white_check_mark: **_Re-done by AWS SAM on 26. August 2022_** 

## 10. Python
You will need to write a bit of code in the Lambda function; you could use more Javascript, but it would be better for our purposes to explore Python – a common language used in back-end programs and scripts – and its boto3 library for AWS.            
:warning: **_Completed on 09. August 2022_ in JavaScript**
:white_check_mark: **_rewritten in Python on 25. August 2022_**

## 11. Tests
You should also include some tests for your Python code.
:white_check_mark: **_Completed on 26. August 2022_** 

## 12. Infrastructure as Code
You should not be configuring your API resources – the DynamoDB table, the API Gateway, the Lambda function – manually, by clicking around in the AWS console. Instead, define them in an AWS Serverless Application Model (SAM) template and deploy them using the AWS SAM CLI. This is called “infrastructure as code” or IaC. It saves you time in the long run.     
:white_check_mark: **_Started to implement on 25. August 2022_**

## 13. Source Control
You do not want to be updating either your back-end API or your front-end website by making calls from your laptop, though. You want them to update automatically whenever you make a change to the code. (This is called continuous integration and deployment, or CI/CD.) Create a GitHub repository for your backend code.     
:white_check_mark: **_Completed on 10. August 2022_**

## 14. CI/CD (Back end)
Set up GitHub Actions such that when you push an update to your Serverless Application Model template or Python code, your Python tests get run. If the tests pass, the SAM application should get packaged and deployed to AWS.        
:white_check_mark: **_Completed on 26. August 2022_** 

## 15. CI/CD (Front end)
Create a second GitHub repository for your website code. Create GitHub Actions such that when you push new website code, the S3 bucket automatically gets updated. (You may need to invalidate your CloudFront cache in the code as well.) Important note: DO NOT commit AWS credentials to source control! Bad hats will find them and use them against you!       
:white_check_mark: **_Completed on 26. August 2022_** 

## 16. Blog post
Finally, in the text of your resume, you should link a short blog post describing some things you learned while working on this project. Dev.to or Hashnode are great places to publish if you don’t have your own blog.          
:white_check_mark: **_Published on 04. September 2022_** 
