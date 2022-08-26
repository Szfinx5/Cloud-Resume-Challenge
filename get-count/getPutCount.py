import json
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('gabor-havasi-cv')
def lambda_handler(event, context):
    response = table.get_item(Key={
            'id':'1'
    })
    record_count = response['Item']['counter']
    record_count = str(int(record_count) + 1)
    print(record_count)
    response = table.put_item(Item={
            'id':'1',
            'counter': record_count
    })
    
    return {
    
    'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': record_count}