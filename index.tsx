import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
});

const roadmapData = [
  {
    title: "Frontend Development",
    description: "Master modern frontend technologies",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: "🎨",
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Backend Development",
    description: "Build robust server-side applications",
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
    icon: "⚙️",
    color: "from-teal-500 to-cyan-500"
  },
  {
    title: "DevOps & Cloud",
    description: "Deploy and scale applications",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    icon: "☁️",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Mobile Development",
    description: "Create cross-platform mobile apps",
    items: ["React Native", "Flutter", "iOS", "Android"],
    icon: "📱",
    color: "from-rose-500 to-pink-500"
  }
];

export default function Home() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 ${rubik.className}`}>
      {/* Header Section */}
      <header className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
          GDGC - Cyber Security Roadmap For Beginners
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Your comprehensive guide to becoming a cyber security starter. Master the most in-demand certificates learning path courses.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition duration-300 transform hover:scale-105">
          Start Learning Now
        </button>
      </header>

      {/* Roadmap Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {roadmapData.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-700">
                <div className={`absolute -top-4 left-8 w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl`}>
                  {item.icon}
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 mb-6">{item.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {item.items.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="bg-gray-700 rounded-lg p-3 text-gray-300 text-center hover:bg-gray-600 transition duration-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Why Choose Our Roadmap?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Relevant",
                description: "Curated content based on current market demands",
                icon: "🎯"
              },
              {
                title: "Step by Step",
                description: "Structured learning path for steady progress",
                icon: "🪜"
              },
              {
                title: "Always Updated",
                description: "Regular updates with latest technologies",
                icon: "🔄"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700 rounded-xl p-6 text-center hover:bg-gray-600 transition duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have accelerated their careers using our roadmap.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-100 transition duration-300 transform hover:scale-105">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Developer Roadmap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}