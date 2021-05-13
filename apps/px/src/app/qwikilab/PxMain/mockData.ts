export const sections: { title: string; context: string }[] = [
  {
    title: 'Overview',
    context:
      'This deployment is ideal for customers who have a very simple deployment architecture and want to protect public facing ec2 instances or applications. You will leverage AWS VPC ingress Routing to insert Cloud One Network Security appliance in the forwarding path of your VPC Traffic to enable true inbound inspection. This all happens transparently to your existing infrastructure.',
  },
  {
    title: 'Create Cloud One Account',
    context:
      'First you will need to sign up for a Cloud One Account if you do not have one already. Make sure you can login to Cloud One web portal and browse to the Network Security section',
  },
  {
    title: 'Familiarize with your fictitious AWS environment setup',
    context:
      'First you will need to sign up for a Cloud One Account if you do not have one already. Make sure you can login to Cloud One web portal and browse to the Network Security section',
  },
  {
    title: 'Verify your AWS environment is vulnerable',
    context: '?',
  },
  {
    title: 'The deployment model',
    context:
      'We are now ready to deploy the network protection. Deployment can be automated using the Deploy Protection wizard in the Cloud One portal. You first need to associate your AWS account with you Cloud One account. The wizard then will ask to select the Internet Gateway you want to protect. It will then perform network discovery against your AWS environment to compile a custom Cloud Formation Template script that you will deploy within your AWS account. You will also need to generate an API key from Cloud One Workload Security which is going to be used to register the Network Security Appliance under your Cloud One account.',
  },
  {
    title: `Associate your AWS account with your Cloud One Account`,
    context: `Follow the wizard in Cloud One Network Security portal to associate the AWS account with your Cloud One account.

    In order to perform this step you need to wait until we have finished setting up your temporary fictitious AWS account. You can grab the details here[ link to details]
    
    ps. You can follow the Clean Up[link to Clean Up step] steps later to remove the above association from your Cloud One Account.
    
    NOTE for developers: optionally we can conditionally show 2 different messages depending the deployment has completed or not
    
    TODO gif`,
  },
  {
    title: 'Deploy protection',
    context: `Follow the wizard in Cloud One Network Security portal to generate your customized Cloud Formation Template. Navigate to AWS console and provision the Cloud Formation Template.

    TODO gif
    
    The Template will deploy the cloud One Network security appliance and will reconfigure your VPC routing so all VPC ingress and egress traffic is routed to the appliance first.
    
    There are 2 keys configuration changes to achieve above setup:
    
    To implement ingress traffic inspection:
    a new route table that routes all external traffic to the Network security appliance is created
    the above route table is associated to the Internet Gateway via the edge association
    To implement egress traffic inspection:
    a new route table that routes all traffic to the Network security appliance is created
    all existing public subnets are updated to use the above route table`,
  },
  {
    title: 'Verify protection is working',
    context: `TODO`,
  },
  {
    title: 'Clean Up',
    context: `Delete the API key you created to register the appliance.
    GIF: clean-up-api-key.gif`,
  },
  {
    title: 'Next steps',
    context: `
    Learn how to sync with Trend Micro's Threat Intelligence
    Learn how to Forward Network Security events for aggregated monitoring and correlation to Splunk and CloudWatch
    Learn how to protect inbound network traffic
    Learn how to protect outbound network traffic`,
  },
];
