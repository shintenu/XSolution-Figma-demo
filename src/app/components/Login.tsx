import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, User, Layers, Network, Box } from 'lucide-react';
import { TechBackground } from './TechBackground';
import { ArchitectureLayers } from './ArchitectureLayers';
import logoImage from '../../assets/2db25314babc5201351ae67b6ee14794d93064c5.png';
import industryAerospace from '../../assets/0a27ea7563d856bc89c5933836daee14d7be5fa9.png';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Enhanced tech background */}
      <TechBackground />
      
      {/* Architecture layers overlay */}
      <ArchitectureLayers />

      {/* Floating orbs with more complexity */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #00BCD4 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-20">
        {/* Left side - Logo and title */}
        <motion.div
          className="flex flex-col items-start max-w-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-6xl font-bold text-white tracking-tight leading-tight">
              解决方案中心
            </h1>
            <div className="flex items-center gap-3">
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full opacity-60" />
              <div className="h-1 w-8 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full opacity-40" />
            </div>
            <p className="text-xl text-gray-300 mt-6 leading-relaxed">
              为大型企业提供多模块协同、微服务架构、容器化部署<br />
              分布式系统的一体化解决方案
            </p>
          </motion.div>

          {/* Core capabilities */}
          <motion.div
            className="mt-12 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-sm text-cyan-400 font-semibold tracking-wider uppercase mb-4">核心能力</div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Layers, label: '多模块协同管理', desc: '统一的项目治理' },
                { icon: Network, label: '微服务编排', desc: '灵活的服务治理' },
                { icon: Box, label: '容器化部署', desc: '标准化交付流程' },
                { icon: Network, label: '分布式架构', desc: '高可用性保障' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{item.label}</div>
                    <div className="text-sm text-gray-400 mt-0.5">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industry clients - using provided image */}
          <motion.div
            className="mt-12 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="text-sm text-cyan-400 font-semibold tracking-wider uppercase">服务行业</div>
            <div className="flex items-center gap-6">
              {[
                { name: '航空航天及国防', gradient: 'from-cyan-400 to-blue-500' },
                { name: '重型装备制造', gradient: 'from-blue-500 to-sky-400' },
                { name: '能源电力', gradient: 'from-sky-400 to-cyan-400' },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative px-6 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-cyan-400/40 transition-all duration-300">
                    <div className="text-sm text-white font-medium whitespace-nowrap">{industry.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Login form */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Enhanced glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl scale-105" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Login card */}
          <div 
            className="relative w-[480px] backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl"
            style={{
              boxShadow: '0 8px 32px 0 rgba(0, 188, 212, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Corner decorations - enhanced */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-3xl blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-3xl blur-2xl" />
            
            {/* Corner lines */}
            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-lg" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-cyan-400/40 rounded-bl-lg" />

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-10">
                <motion.h2 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  解决方案中心
                </motion.h2>
                <motion.p 
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  登录以访问您的账户
                </motion.p>
              </div>

              {/* Login form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">*</span>
                    用户名
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-xl opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300" />
                    <div className="relative flex items-center">
                      <User className="absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="请输入用户名"
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Password field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">*</span>
                    密码
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-xl opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300" />
                    <div className="relative flex items-center">
                      <Lock className="absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="请输入密码"
                        className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Submit buttons */}
                <motion.div
                  className="space-y-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full relative group"
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    
                    {/* Button content */}
                    <div className="relative flex items-center justify-center py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>登录中...</span>
                        </div>
                      ) : (
                        <>
                          <span className="relative z-10">登录</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </>
                      )}
                    </div>
                  </button>

                  <button
                    type="button"
                    className="w-full py-4 px-6 bg-white/5 border border-white/10 rounded-xl font-medium text-gray-300 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    取消
                  </button>
                </motion.div>
              </form>

              {/* Footer links */}
              <motion.div
                className="mt-8 text-center text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <a href="#" className="hover:text-cyan-400 transition-colors">忘记密码？</a>
                <span className="mx-3">|</span>
                <a href="#" className="hover:text-cyan-400 transition-colors">联系管理员</a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative line with segments */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <div className="h-full flex">
          <div className="flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-500 opacity-50" />
          <div className="flex-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-400 opacity-50" />
          <div className="flex-1 bg-gradient-to-r from-blue-400 via-sky-400 to-transparent opacity-50" />
        </div>
      </motion.div>
    </div>
  );
}