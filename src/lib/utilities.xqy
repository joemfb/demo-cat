xquery version "1.0-ml";

module namespace utilities = "http://marklogic.com/demo-cat/utilities";


declare 
function utilities:send-notification(
  $recipient-name as xs:string,
  $recipient-email as xs:string,
  $subject as  xs:string,
  $message as item()
) as empty-sequence() {
  xdmp:email(
    <em:Message
      xmlns:em="URN:ietf:params:email-xml:"
      xmlns:rf="URN:ietf:params:rfc822:">
      <rf:subject>{$subject}</rf:subject>
      <rf:from>
        <em:Address>
          <em:name>Demo Cat</em:name>
          <em:adrs>no-reply@ydemo-cat.marklogic.com</em:adrs>
        </em:Address>
      </rf:from>
  <rf:to>
    <em:Address>
      <em:name>{$recipient-name}</em:name>
      <em:adrs>{$recipient-email}</em:adrs>
    </em:Address>
  </rf:to>
  <em:content>
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>{$subject}</title>
      </head>
      <body>{$message}</body>
    </html>
  </em:content>
</em:Message>)
  
};