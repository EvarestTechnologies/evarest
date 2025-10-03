import { TrendingUp, BarChart3, Activity } from 'lucide-react';
import Button from '../ui/Button';
import CountUp from '../ui/CountUp';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero.jpg")`,
          }}
        />
      </div>

      <div className="container-custom relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Activity className="w-4 h-4 mr-2" />
              Enterprise-Grade Engineering Solutions
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Engineering Excellence</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                That Scales Your Vision
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Premium engineering services that combine technical expertise with business
              understanding to accelerate product development for mid-market and enterprise clients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <Button variant="primary" size="lg" href="#consultation">
                Schedule Consultation
              </Button>
              <Button variant="secondary" size="lg" href="#case-studies">
                View Case Studies
              </Button>
            </div>

            {/* Trust Metrics - Animated */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center lg:text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  $<CountUp end={50} duration={2000} />M+
                </div>
                <div className="text-sm text-slate-400">Client Revenue Enabled</div>
              </div>
              <div className="text-center lg:text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  <CountUp end={99} duration={2000} decimals={1} />.9%
                </div>
                <div className="text-sm text-slate-400">Uptime SLA</div>
              </div>
              <div className="text-center lg:text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  ISO 27001
                </div>
                <div className="text-sm text-slate-400">Certified</div>
              </div>
              <div className="text-center lg:text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  24/7
                </div>
                <div className="text-sm text-slate-400">Global Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Mobile Mockup with Charts */}
          <div className="hidden lg:block relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-slate-800 rounded-[3rem] p-4 shadow-2xl border-8 border-slate-700">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-10" />

                {/* Screen */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* App Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold text-lg">Analytics Dashboard</h3>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      </div>
                      <p className="text-slate-400 text-xs">Real-time Performance Metrics</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm rounded-xl p-3 border border-blue-400/20">
                        <TrendingUp className="w-4 h-4 text-blue-400 mb-1" />
                        <div className="text-xl font-bold text-white">
                          +<CountUp end={47} duration={2500} />%
                        </div>
                        <div className="text-xs text-slate-400">Growth</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm rounded-xl p-3 border border-green-400/20">
                        <BarChart3 className="w-4 h-4 text-green-400 mb-1" />
                        <div className="text-xl font-bold text-white">
                          $<CountUp end={2} duration={2500} decimals={1} />M
                        </div>
                        <div className="text-xs text-slate-400">Revenue</div>
                      </div>
                    </div>

                    {/* Chart Visualization */}
                    <div className="flex-1 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                      <div className="flex items-end justify-between h-full space-x-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85].map((height, idx) => (
                          <div
                            key={idx}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-green-400 rounded-t animate-pulse"
                            style={{
                              height: `${height}%`,
                              animationDelay: `${idx * 0.1}s`,
                              animationDuration: '2s',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom Metrics */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="bg-slate-800/70 rounded-lg p-2 text-center">
                        <div className="text-xs text-slate-400">Users</div>
                        <div className="text-sm font-bold text-white">
                          <CountUp end={15} duration={2000} />K
                        </div>
                      </div>
                      <div className="bg-slate-800/70 rounded-lg p-2 text-center">
                        <div className="text-xs text-slate-400">Orders</div>
                        <div className="text-sm font-bold text-white">
                          <CountUp end={842} duration={2000} />
                        </div>
                      </div>
                      <div className="bg-slate-800/70 rounded-lg p-2 text-center">
                        <div className="text-xs text-slate-400">Uptime</div>
                        <div className="text-sm font-bold text-green-400">99.9%</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/20 rounded-2xl backdrop-blur-sm border border-blue-400/30 flex items-center justify-center animate-bounce">
                <TrendingUp className="w-10 h-10 text-blue-400" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-500/20 rounded-2xl backdrop-blur-sm border border-green-400/30 flex items-center justify-center animate-pulse">
                <BarChart3 className="w-10 h-10 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
