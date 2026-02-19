export default function Experiences() {
  return (
    <section id="experiences" className="py-16">
      <h1 className="mb-12">Experience</h1>

      {/* Employment */}
      <h2 className="text-xl font-bold mb-6 uppercase tracking-wider text-coral">
        Employment
      </h2>

      <div className="space-y-10 mb-16">
        {/* Klarna */}
        <div className="border-l-4 border-coral pl-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
            <h3 className="text-xl font-bold">Klarna AB</h3>
            <span className="text-sm text-gray-mid">Jan 2016 — Present</span>
          </div>
          <p className="text-coral font-medium mb-3">
            Site Reliability Engineer &middot; Stockholm, Sweden
          </p>
          <p className="text-gray-mid mb-3">
            Work in a remote team across two countries with English as the primary
            language. Hosting a third-party application for processing transactions
            and as a ledger for payments. Migrated production environments from
            on-prem to AWS including Oracle databases. Switched monitoring from
            Prometheus/Grafana to Datadog and AWS CloudWatch. Set up automated AMI
            pipelines using Jenkins and Ansible. Included in the 24/7 on-call
            rotation for infrastructure, application, and database incidents.
          </p>
          <div className="flex flex-wrap gap-2">
            {['AWS', 'Terraform', 'Docker', 'Ansible', 'Jenkins', 'Datadog', 'Oracle'].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-sand text-bistre px-2 py-1 rounded"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* RedBridge */}
        <div className="border-l-4 border-ash pl-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
            <h3 className="text-xl font-bold">RedBridge Group</h3>
            <span className="text-sm text-gray-mid">Nov 2012 — Dec 2015</span>
          </div>
          <p className="text-ash font-medium mb-4">
            Consultant &middot; Stockholm, Sweden
          </p>

          {/* Assignments */}
          <div className="space-y-6 ml-2">
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h4 className="font-semibold">Stockholms Läns Landsting</h4>
                <span className="text-sm text-gray-mid">Sep 2014 &middot; 1 month</span>
              </div>
              <p className="text-gray-mid mt-1">
                Upgraded Puppet to the next major release, refactored modules, and
                hosted workshops on Puppet best practices.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h4 className="font-semibold">Pensionsmyndigheten</h4>
                <span className="text-sm text-gray-mid">Mar 2014 — Aug 2014 &middot; 6 months</span>
              </div>
              <p className="text-gray-mid mt-1">
                Managed the processing platform alongside developers and QA.
                Application upgrades, Puppet configuration, automation scripting,
                and major quarterly production releases.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h4 className="font-semibold">Comhem AB</h4>
                <span className="text-sm text-gray-mid">Dec 2012 — Dec 2013 &middot; 1 year</span>
              </div>
              <p className="text-gray-mid mt-1">
                Linux System Administrator managing DHCP IP configuration for
                broadband via Puppet. Evaluated and set up new configuration
                management for router infrastructure.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h4 className="font-semibold">Point Transaction Systems AB</h4>
                <span className="text-sm text-gray-mid">2011 — 2012 &middot; 1 year</span>
              </div>
              <p className="text-gray-mid mt-1">
                Linux PCI-DSS team managing Red Hat and CentOS environments for
                card payment processing. Set up Nagios monitoring and OSSEC
                host-based intrusion detection.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Puppet', 'Linux', 'Nagios', 'OSSEC', 'Red Hat', 'CentOS'].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-sand text-bistre px-2 py-1 rounded"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Education */}
      <h2 className="text-xl font-bold mb-6 uppercase tracking-wider text-coral">
        Education
      </h2>

      <div className="space-y-6">
        <div className="border-l-4 border-ash pl-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
            <h3 className="text-lg font-bold">Nackademin</h3>
            <span className="text-sm text-gray-mid">2007 — 2009</span>
          </div>
          <p className="text-gray-mid">
            Vocational Training (KY, 2 years) — Linux and Network
          </p>
        </div>

        <div className="border-l-4 border-ash pl-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
            <h3 className="text-lg font-bold">Kärrtorps Gymnasium</h3>
            <span className="text-sm text-gray-mid">2004 — 2007</span>
          </div>
          <p className="text-gray-mid">
            System Technician — Technical Program
          </p>
        </div>
      </div>
    </section>
  )
}
