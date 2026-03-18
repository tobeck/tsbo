export default function Experiences() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <h1 className="mb-12 glow-text text-phosphor">Experience</h1>

      {/* Employment */}
      <h2 className="text-xs font-bold mb-6 uppercase tracking-wider text-phosphor">
        Employment
      </h2>

      <div className="space-y-10 mb-16">
        {/* Important Looking Pirates VFX */}
        <div className="border-l-2 border-phosphor pl-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
            <h3 className="text-xl font-bold text-white">Important Looking Pirates VFX</h3>
            <span className="text-sm text-ghost font-mono">Apr 2023 — Present</span>
          </div>
          <p className="text-phosphor font-medium mb-4 font-mono text-sm">Stockholm, Sweden</p>

          <div className="space-y-6 ml-2">
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h4 className="font-semibold text-white">Head of IT</h4>
                <span className="text-sm text-ghost font-mono">
                  Jun 2025 &middot; present
                </span>
              </div>
              <p className="text-ghost mt-1">
                Managing the IT Support and Platform teams together with their
                respective Leads. Planning roadmaps together with development
                teams and stakeholders in the VFX production. Purchase and
                renewals of hardware, licensing and budgets. Developing and
                recruiting talent and following up on audit process and security
                best practices for the industry.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h4 className="font-semibold text-white">Lead Platform Engineer</h4>
                <span className="text-sm text-ghost font-mono">
                  Apr 2023 — Jun 2025 &middot; 2 yrs
                </span>
              </div>
              <p className="text-ghost mt-1">
                Working as the team lead in the Platform team, managing on-prem
                infrastructure such as network and firewalls, high performance
                flash storage and monitoring.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                'Puppet',
                'Rocky Linux',
                'Network',
                'Firewalls',
                'Storage',
                'Prometheus/Grafana',
                'Kubernetes',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono font-medium border border-phosphor text-phosphor px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Klarna */}
        <div className="border-l-2 border-amber pl-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
            <h3 className="text-xl font-bold text-white">Klarna AB</h3>
            <span className="text-sm text-ghost font-mono">Jan 2016 — Apr 2023</span>
          </div>
          <p className="text-amber font-medium mb-3 font-mono text-sm">
            Site Reliability Engineer &middot; Stockholm, Sweden
          </p>
          <p className="text-ghost mb-3">
            Work in a remote team across multiple countries with English as the
            primary language. Operating the backend used for processing
            transactions and ledger for payments. Migrated production
            environments from on-prem datacenters to AWS. Hands on with
            monitoring such as Prometheus, Grafana, Datadog and AWS Cloudwatch.
            Automating base AMI creation using Ansible and Packer. Part of the
            24/7 on-call rotation for infrastructure, application, and database
            incidents.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'AWS',
              'Terraform',
              'Docker',
              'Ansible',
              'Jenkins',
              'Datadog',
              'Oracle',
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono font-medium border border-amber text-amber px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RedBridge */}
        <div className="border-l-2 border-cyan pl-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
            <h3 className="text-xl font-bold text-white">RedBridge Group</h3>
            <span className="text-sm text-ghost font-mono">Nov 2012 — Dec 2015</span>
          </div>
          <p className="text-cyan font-medium mb-4 font-mono text-sm">
            Consultant &middot; Stockholm, Sweden
          </p>

          <div className="space-y-6 ml-2">
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h4 className="font-semibold text-white">Stockholms Läns Landsting</h4>
                <span className="text-sm text-ghost font-mono">
                  Sep 2014 &middot; 1 month
                </span>
              </div>
              <p className="text-ghost mt-1">
                Consulting and performing Puppet major upgrade, module
                refactoring and hosting workshops on Puppet best practices and
                use.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h4 className="font-semibold text-white">Pensionsmyndigheten</h4>
                <span className="text-sm text-ghost font-mono">
                  Mar 2014 — Aug 2014 &middot; 6 months
                </span>
              </div>
              <p className="text-ghost mt-1">
                Managed the processing platform alongside developers and QA.
                Application upgrades, Puppet configuration, automation
                scripting, and major quarterly production releases.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h4 className="font-semibold text-white">Comhem AB</h4>
                <span className="text-sm text-ghost font-mono">
                  Dec 2012 — Dec 2013 &middot; 1 year
                </span>
              </div>
              <p className="text-ghost mt-1">
                Linux System Administrator working with Puppet. Evaluated and
                set up new configuration management for network infrastructure.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h4 className="font-semibold text-white">Point Transaction Systems AB</h4>
                <span className="text-sm text-ghost font-mono">
                  2011 — 2012 &middot; 1 year
                </span>
              </div>
              <p className="text-ghost mt-1">
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
                  className="text-xs font-mono font-medium border border-cyan text-cyan px-2 py-1"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Education */}
      <h2 className="text-xs font-bold mb-6 uppercase tracking-wider text-amber">
        Education
      </h2>

      <div className="space-y-6">
        <div className="border-l-2 border-ghost pl-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
            <h3 className="text-lg font-bold text-white">Nackademin</h3>
            <span className="text-sm text-ghost font-mono">2007 — 2009</span>
          </div>
          <p className="text-ghost">
            Vocational Training (KY, 2 years) — Linux and Network
          </p>
        </div>

        <div className="border-l-2 border-ghost pl-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
            <h3 className="text-lg font-bold text-white">Kärrtorps Gymnasium</h3>
            <span className="text-sm text-ghost font-mono">2004 — 2007</span>
          </div>
          <p className="text-ghost">Technical Programme - CCNA</p>
        </div>
      </div>
    </section>
  )
}
