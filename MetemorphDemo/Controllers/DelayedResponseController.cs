using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MetemorphDemo.Controllers
{
    public class DelayedResponseController : ApiController
    {
        public object Get(int id)
        {
            Thread.Sleep(1000 * id);
            return new { result = id };
        }
    }
}