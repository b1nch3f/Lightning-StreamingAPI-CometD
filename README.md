# Lightning-StreamingAPI-CometD


## Create a push topic
~~~~
PushTopic pushTopic = new PushTopic();
pushTopic.Name = 'CaseUpdates';
pushTopic.Query = 'SELECT Id, CaseNumber, Subject, Status FROM Case';
pushTopic.ApiVersion = 38.0;
pushTopic.NotifyForOperationCreate = true;
pushTopic.NotifyForOperationUpdate = true;
pushTopic.NotifyForOperationUndelete = true;
pushTopic.NotifyForOperationDelete = true;
pushTopic.NotifyForFields = 'Referenced';
insert pushTopic;
~~~~
