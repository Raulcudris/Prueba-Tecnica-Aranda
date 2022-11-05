using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Catalog.Dtos
{
    public class CreateProductsDtos
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Categ_Id { get; set; }
        public IFormFile Image { get; set; }
    }
}
