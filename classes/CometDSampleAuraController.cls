public with sharing class CometDSampleAuraController {
	@AuraEnabled
	public static String retrieveSesstionId() {
		return UserInfo.getSessionId();
	}
}