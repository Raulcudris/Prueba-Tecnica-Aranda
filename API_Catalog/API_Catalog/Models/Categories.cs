using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_Catalog.Models
{
    [Table("Categories")]
    public class Categories
    {
        [Key]
        public int Categ_Id { get; set; }

        [Required(ErrorMessage = "Requerido")]
        [StringLength(200)]
        public string Name { get; set; }
        [Required(ErrorMessage = "Requerido")]
        [StringLength(200)]
        public string Description { get; set; }

    }
}
