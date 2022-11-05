using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Catalog.Dtos
{
    public class ProductsDtos
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Categ_Id { get; set; }
        public string Image { get; set; }
    }
}
