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
      'We are now ready to deploy the network protection. Deployment can be automated using the Deploy Protection wizard in the Cloud One portal. You first need to associate your AWS account with you Cloud One account. The wizard then will ask to select the Internet Gateway you want to protect. It will then perform network discovery against your AWS environment to compile a custom Cloud Formation Template script that you will deploy within your AWS account.',
  },
  {
    title: 'Add the cloud account',
    context:
      'Follow the wizard in Cloud One Network Security portal to associate the AWS account with your Cloud One account. In order to perform this step you need to wait until we have finished setting up your temporary fictitious AWS account. You can grab the details here[ link to details] ps. You can follow the Clean Up[link to Clean Up step] steps later to remove the above association from your Cloud One Account. NOTE for developers: optionally we can conditionally show 2 different messages depending the deployment has completed or not',
  },
  {
    title: 'Deploy protection',
    context: '???',
  },
];
