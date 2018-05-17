class Dog
  attr_accessor :name

  def initialize(name)
    self.name = name
  end

  def speak
    puts "Hello, my name is #{self.name}"
  end
end

x = Dog.new("Steve")
x.speak
