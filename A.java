public class A {
    private String name;
    private double salary;
    private int age;
  
    public void setName(String name) {
      this.name = name;
    }
  
    public void setSalary(double salary) {
      this.salary = salary;
    }
  
    public void setAge(int age) {
      this.age = age;
    }
  
    public void display() {
      System.out.println("Name: " + name);
      System.out.println("Salary: " + salary);
      System.out.println("Age: " + age);
    }
  
    public static void main(String[] args) {
      A obj = new A();
      obj.setName("Keshav Singh");
      obj.setSalary(300000);
      obj.setAge(22); // remove "years"
      obj.display();
    }
  }
