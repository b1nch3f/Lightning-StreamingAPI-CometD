({
	bootstrapCometD : function(component) {
		var action = component.get("c.retrieveSesstionId");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if(state === "SUCCESS") {
                console.log(response.getReturnValue());
                component.set("v.sessionId", response.getReturnValue());
                // Connect to the CometD endpoint
		        $.cometd.init({
		           url: '/cometd/38.0',
		           requestHeaders: { Authorization: component.get("v.sessionId")}
		       });

		       // Subscribe to a topic. JSON-encoded update will be returned
		       // in the callback
		       $.cometd.subscribe('/topic/CaseUpdates', function(message) {
		           console.log(message);
		           var subject = message.data.sobject.Subject;
		           var status = message.data.sobject.Status;
		           
		           component.set("v.subject", subject);
		           component.set("v.status", status);
		        });
            }
        });
        $A.enqueueAction(action);
	}
})