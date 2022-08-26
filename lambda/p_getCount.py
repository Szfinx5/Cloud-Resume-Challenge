
import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume-challenge')
def lambda_handler(event, context):
    response = table.get_item(Key={
       'id':'1'
    }) 
    
    return response['Item']['counter']
