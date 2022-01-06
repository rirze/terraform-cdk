using System;
using Constructs;
using HashiCorp.Cdktf;


namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {
            new LocalBackend(this);
            // define resources here
        }

        public static void Main(string[] args)
        {
            App app = new App();
            new MyApp(app, "{{ $base }}");
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}