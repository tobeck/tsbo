import Layout from '../components/layout'
import Container from '../components/container'

export default function Experiences() {
  return (
    <>
      <Layout>
        <Container>
          <section className="flex-col md:flex-row flex items-center md:justify-between mt-5 mb-5 md:mb-12">
            <div>
              <h1>Resume</h1>
              <h2>Profile</h2>
              <p>
                Experienced Site Reliability Engineer with over ten years of
                experience in both on-prem and cloud based infrastructure. A
                passion for problem solving and designing solutions for reliable
                and performant environments, equally comfortable in
                collaboration with other engineers and in smaller solo projects.
                Worked for many years in the financial industry with all that
                comes with that from security to auditing and reliability
                standpoint. Ability to keep a cool head in stressful situations.
                Proven over years of on-call work in multiple production
                environments over multiple geographical locations for both
                application and database infrastructure.
              </p>
              <h2>Employment History</h2>
              <>
                <h3>Site Reliability Engineer Klarna AB</h3>
                <h3>Stockholm Sweden</h3>
                <p>jan. 2016-now</p>
                <p>
                  Work in a remote team in two different countries with multiple
                  nationalities and English as the primary language. Hosting a
                  third party application used for processing transactions and
                  as a ledger for payments. Went from a highly manual
                  configuration management system with Chef, to a full DevOps
                  approach with infrastructure as code by using Docker and
                  Terraform. Migrated production environments from on-prem to
                  AWS including Oracle databases and switched monitoring from
                  Prometheus and Grafana to Datadog and AWS CloudWatch. Set up
                  automated pipelines for AWS AMIs using Jenkins and Ansible to
                  manage underlying Red Hat OS configuration. Performance
                  testing in preparation for peak seasons. Included in the 24/7
                  on-call rotation as the person responsible to identify,
                  escalate and manage incidents in regards to infrastructure,
                  application and database related issues. Key Achievements
                  Migrating on-prem production environment to Amazon Web
                  Services (AWS). Migrating from Chef configuration management
                  to AWS CloudFormation and Ansible. Setting up AWS Amazon
                  Machine Image (AMI) pipeline for multiple AWS production
                  environments. Migrating from Ansible and CloudFormation to
                  Docker and Terraform.
                </p>
                <h3>Consultant RedBridge Group</h3>
                <h3>Stockholm Sweden</h3>
                <p>nov. 2012–dec. 2015</p>
                <h3>Assignments</h3>
                <h4>Stockholms Läns Landsting</h4>
                <p>sep. 2014 · 1 mån</p>
                <p>
                  The primary goal for the assignment was to upgrade their
                  Puppet installation to the next Major release. This was
                  reached on time and we also helped them refactor some of their
                  Puppet modules and host two workshops around Puppet module
                  usage and best practices.
                </p>
                <h4>Pensionsmyndigheten</h4>
                <p>mars 2014–aug. 2014 · 6 mån</p>
                <p>
                  Working with the processing platform in close collaboration
                  with their developers and test personnel. The daily workload
                  consisted of upgrading and installing the application,
                  managing puppet configuration, scripting for automation and
                  handling incidents, major production upgrades (major quarterly
                  release during summer involving multiple teams over a
                  weekend).
                </p>
                <h4>Comhem AB</h4>
                <p>dec. 2012–dec. 2013 · 1 år 1 mån</p>
                <p>
                  Linux System Administrator with their platform production
                  department. Using Puppet we managed the DHCP IP configuration
                  for the broadband at ComHem closely together with their
                  network department. The assignment also included setting up
                  and evaluating a new configuration management software for
                  router configuration (similar to Puppet).
                </p>
                <h4>Point Transaction Systems AB</h4>
                <p>2011 – 2012 · 1 år</p>
                <p>
                  Consultant working in the Linux PCI-DSS (Payment Card Industry
                  Data Security Standard) team managing Red Hat and CentOS based
                  on-prem environments for processing card payments. This
                  included writing up Change Requests for upcoming changes and
                  OS upgrades. Deployment of changes remote and on site in
                  datacenters. Solo projects, Configuring and setting up Nagios
                  for the PCI production platform. Configuring and setting up
                  OSSEC which is an Open Source Host-based Intrusion Detection
                  System that performs log analysis, file integrity checking,
                  policy monitoring, rootkit detection, real-time alerting and
                  active response.
                </p>
                <h2>Education</h2>
                <h2>Vocational Training (KY 2yrs)</h2>
                <p>Nackademin KY Linux and Network</p>
                <p>2007 - 2009</p>
                <h2>System Technician High School</h2>
                <p>Kärrtorps Gymnasium Technical Program</p>
                <p>2004 - 2007</p>
              </>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}
