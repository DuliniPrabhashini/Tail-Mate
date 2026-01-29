import { Text, View, TouchableOpacity, ImageBackground, SafeAreaView } from "react-native";

const Guset = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop'
        }}
        className="flex-1"
        resizeMode="cover"
      >
        {/* Dark overlay */}
        <View className="absolute inset-0 bg-black/60" />
        
        <View className="flex-1 px-6 pt-10 pb-8 justify-between">
          
          {/* Header Section */}
          <View className="items-center mt-8">
            <View className="flex-row items-center mb-4">
              <View className="w-14 h-14 rounded-full bg-[#D4AF37]/20 items-center justify-center mr-3 border border-[#D4AF37]/30">
                <Text className="text-3xl">🐾</Text>
              </View>
              <View>
                <Text className="text-5xl font-bold text-white">
                  Tailmate
                </Text>
                <Text className="text-[#D4AF37] text-lg -mt-1">
                  Premium Pet Breeding
                </Text>
              </View>
            </View>
            
            {/* Decorative line */}
            <View className="w-32 h-1 bg-[#D4AF37] rounded-full mb-8" />
          </View>

          {/* Main Content */}
          <View className="items-center">
            <Text className="text-6xl font-bold text-center text-white leading-tight">
              Find Perfect{'\n'}Matches for{'\n'}Your Pet
            </Text>
            
            <Text className="text-xl text-[#FFD700] text-center mt-6 px-4">
              Connect with premium pet owners for breeding
            </Text>
            
            {/* Stats or Features */}
            <View className="flex-row justify-around w-full mt-12">
              <View className="items-center">
                <View className="w-20 h-20 rounded-full bg-black/50 border-2 border-[#D4AF37] items-center justify-center mb-2">
                  <Text className="text-3xl">🐕</Text>
                </View>
                <Text className="text-white font-semibold">Pure Breeds</Text>
              </View>
              
              <View className="items-center">
                <View className="w-20 h-20 rounded-full bg-black/50 border-2 border-[#D4AF37] items-center justify-center mb-2">
                  <Text className="text-3xl">🐈</Text>
                </View>
                <Text className="text-white font-semibold">Healthy Matches</Text>
              </View>
              
              <View className="items-center">
                <View className="w-20 h-20 rounded-full bg-black/50 border-2 border-[#D4AF37] items-center justify-center mb-2">
                  <Text className="text-3xl">⭐</Text>
                </View>
                <Text className="text-white font-semibold">Verified</Text>
              </View>
            </View>
          </View>

          {/* Buttons Section */}
          <View className="space-y-4">
            <TouchableOpacity 
              className="bg-[#D4AF37] py-5 rounded-2xl items-center"
              activeOpacity={0.8}
            >
              <Text className="text-black text-2xl font-bold">
                Create Account
              </Text>
              <Text className="text-black/80 text-sm mt-1">
                Start your pet's journey
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="bg-transparent py-5 rounded-2xl items-center border-2 border-[#D4AF37]"
              activeOpacity={0.8}
            >
              <Text className="text-[#D4AF37] text-2xl font-bold">
                Sign In
              </Text>
              <Text className="text-[#D4AF37]/80 text-sm mt-1">
                Welcome back!
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="bg-black/50 py-4 rounded-2xl items-center border border-gray-800"
              activeOpacity={0.8}
            >
              <Text className="text-white text-lg font-semibold">
                Continue as Guest
              </Text>
              <Text className="text-gray-400 text-sm mt-1">
                Explore without account
              </Text>
            </TouchableOpacity>
            
            <Text className="text-center text-gray-400 text-xs mt-6 px-8">
              By continuing, you agree to our Terms and acknowledge our Privacy Policy
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Guset;