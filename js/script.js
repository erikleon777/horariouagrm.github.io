document.addEventListener("DOMContentLoaded", function () {
    // Datos de las materias
    const materias = {
        "MED200": { nombre: "MED 200 - ANATOMÍA PATOLÓGICA", grupos: 6, subgrupos: 3 },
        "MED201": { nombre: "MED 201 - BACTERIOLOGÍA Y VIROLOGÍA MÉDICA", grupos: 6, subgrupos: 3 },
        "MED202": { nombre: "MED 202 - FISIOLOGÍA HUMANA", grupos: 6, subgrupos: 3 },
        "MED203": { nombre: "MED 203 - BIOQUÍMICA MÉDICA", grupos: 7, subgrupos: 3 },
        "MED209": { nombre: "MED 209 - PARASITOLOGÍA Y MICOLOGÍA MÉDICA", grupos: 6, subgrupos: 3 },
        "SAP200": { nombre: "SAP 200 - SALUD PÚBLICA II", grupos: 6, subgrupos: 1 },
        "SAP300": { nombre: "SAP 300 - SALUD PÚBLICA III", grupos: 3, subgrupos: 1 }
    };

    // Horarios específicos para cada materia, grupo y subgrupo
        const horariosMaterias = {
        "MED200": { // Código de la materia
            "A1": { 
                "Lunes": ["11:30 - 12:15", "12:15 - 13:00"], 
                "Martes": ["13:45 - 14:30", "14:30 - 15:15"],             
            },
            "A2": { 
                "Lunes": ["11:30 - 12:15", "12:15 - 13:00"], 
                "Viernes": ["11:30 - 12:15", "12:15 - 13:00"],           
            },
            "A3": { 
                "Lunes": ["11:30 - 12:15", "12:15 - 13:00"], 
                "Jueves": ["13:45 - 14:30", "14:30 - 15:15"],
        },          
          "B1": { 
                "Viernes": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Jueves": ["19:45 - 20:30", "20:30 - 21:15"],
         },
           "B2": { 
                "Viernes": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
           },
      
        "B3": { 
                "Viernes": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
        },
        "C1": { 
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Martes": ["16:45 - 17:30", "17:30 - 18:15"],
        },
        "C2": { 
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Viernes": ["15:15 - 16:00", "16:00 - 16:45"],
        },
        "C3": { 
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Viernes": ["18:15 - 19:00", "19:00 - 19:45"],
        },
        "D1": { 
                "Miércoles": ["11:30 - 12:15", "12:15 - 13:00", "13:45 - 14:30", "14:30 - 15:15"], 
        },
        "D2": { 
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
        },
        "D3": { 
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
        },
          "E1": { 
                "Jueves": ["11:30 - 12:15", "12:15 - 13:00"], 
                "Viernes": ["13:45 - 14:30", "14:30 - 15:15"],
        },
            "E2": { 
                "Jueves": ["11:30 - 12:15", "12:15 - 13:00"], 
                "Lunes": ["13:45 - 14:30", "14:30 - 15:15"],
        },
          "E3": { 
                "Jueves": ["11:30 - 12:15", "12:15 - 13:00"], 
                "Lunes": ["10:00 - 10:45", "10:45 - 11:30"],
        },
          "F1": { 
                "Martes": ["11:30 - 12:15", "12:15 - 13:00"], 
                "Miércoles": ["10:00 - 10:45", "10:45 - 11:30"],
        },
          "F2": { 
                "Martes": ["11:30 - 12:15", "12:15 - 13:00"], 
                "Viernes": ["08:30 - 09:15", "09:15 - 10:00"],
        },
          "F3": { 
                "Martes": ["11:30 - 12:15", "12:15 - 13:00"], 
                "Viernes": ["10:00 - 10:45", "10:45 - 11:30"],
        },
        },
            "MED201": { // Código de la materia
            "A1": { 
                "Miércoles": ["08:30 - 09:15", "09:15 - 10:00", "07:00 - 07:45", "07:45 - 08:30"], 
               },   
             "A2": { 
                "Miércoles": ["08:30 - 09:15", "09:15 - 10:00", "11:30 - 12:15", "12:15 - 13:00"],
         },
            "A3": { 
                "Miércoles": ["08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30"],
             },   
             "B1": { 
                "Jueves": ["15:15 - 16:00", "16:00 - 16:45", "18:15 - 19:00", "19:00 - 19:45"],
               },   
             "B2": { 
                "Jueves": ["15:15 - 16:00", "16:00 - 16:45", "13:45 - 14:30", "14:30 - 15:15"],
                },   
             "B3": { 
                "Jueves": ["15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"],
                },   
             "C1": { 
                "Lunes": ["16:45 - 17:30", "17:30 - 18:15",  "15:15 - 16:00", "16:00 - 16:45"],
               },
          "C2": { 
                "Lunes": ["16:45 - 17:30", "17:30 - 18:15"], 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30"],
               },
          "C3": { 
                "Lunes": ["16:45 - 17:30", "17:30 - 18:15"], 
                "Martes": ["08:30 - 09:15", "09:15 - 10:00"],
               },
          "D1": { 
                "Martes": ["11:30 - 12:15", "12:15 - 13:00", "10:00 - 10:45", "10:45 - 11:30"],
            },
          "D2": { 
                "Martes": ["11:30 - 12:15", "12:15 - 13:00", "15:15 - 16:00", "16:00 - 16:45"],
            },
          "D3": { 
                "Martes": ["11:30 - 12:15", "12:15 - 13:00", "16:45 - 17:30", "17:30 - 18:15"],
             },
          "E1": { 
                "Martes": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
            },
          "E2": { 
                "Martes": ["16:45 - 17:30", "17:30 - 18:15", "13:45 - 14:30", "14:30 - 15:15"],
           },
          "E3": { 
                "Martes": ["16:45 - 17:30", "17:30 - 18:15", "15:15 - 16:00", "16:00 - 16:45"], 
             },
          "F1": { 
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"], 
             },
          "F2": { 
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15", "16:45 - 17:30", "17:30 - 18:15"],
             },
          "F3": { 
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15", "18:15 - 19:00", "19:00 - 19:45"],
            
      },
           },
            "MED202": { // Código de la materia
            "A1": { 
            "Lunes": ["16:00 - 16:45", "16:45 - 17:30", "08:30 - 09:15", "09:15 - 10:00"],
            "Martes": ["16:00 - 16:45", "16:45 - 17:30"],
            "Miércoles": ["16:00 - 16:45", "16:45 - 17:30"],
            },
            "A2": { 
            "Lunes": ["16:00 - 16:45", "16:45 - 17:30"],
            "Martes": ["16:00 - 16:45", "16:45 - 17:30"],
            "Miércoles": ["16:00 - 16:45", "16:45 - 17:30", "10:00 - 10:45", "10:45 - 11:30"],   
             },
            "A3": { 
            "Lunes": ["16:00 - 16:45", "16:45 - 17:30"],
            "Martes": ["16:00 - 16:45", "16:45 - 17:30"],
            "Miércoles": ["16:00 - 16:45", "16:45 - 17:30", "11:30 - 12:15", "12:15 - 13:00"],   
              },
            "B1": { 
            "Miércoles": ["08:30 - 09:15", "09:15 - 10:00", "07:00 - 07:45", "07:45 - 08:30"],
            "Jueves": ["08:30 - 09:15", "09:15 - 10:00"],
            "Viernes": ["08:30 - 09:15", "09:15 - 10:00"],    
              },
            "B2": { 
            "Miércoles": ["08:30 - 09:15", "09:15 - 10:00"],
            "Jueves": ["08:30 - 09:15", "09:15 - 10:00", "07:00 - 07:45", "07:45 - 08:30"],
            "Viernes": ["08:30 - 09:15", "09:15 - 10:00"],
               },
            "B3": { 
            "Miércoles": ["08:30 - 09:15", "09:15 - 10:00"],
            "Jueves": ["08:30 - 09:15", "09:15 - 10:00"],
            "Viernes": ["08:30 - 09:15", "09:15 - 10:00", "07:00 - 07:45", "07:45 - 08:30"],  
              },
            "C1": { 
            "Lunes": ["11:30 - 12:15", "12:15 - 13:00"],
            "Martes": ["13:45 - 14:30", "14:30 - 15:15", "08:30 - 09:15", "09:15 - 10:00"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],   
            },
            "C2": { 
            "Lunes": ["11:30 - 12:15", "12:15 - 13:00"],
            "Martes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],   
              },
            "C3": { 
            "Lunes": ["11:30 - 12:15", "12:15 - 13:00"],
            "Martes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"], 
            "Viernes": ["11:30 - 12:15", "12:15 - 13:00"],
            },
            "D1": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30", "15:15 - 16:00", "16:00 - 16:45"],
            "Martes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["11:30 - 12:15", "12:15 - 13:00"],   
            },
            "D2": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30", "13:45 - 14:30", "14:30 - 15:15"],
            "Martes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["11:30 - 12:15", "12:15 - 13:00"],
              },
            "D3": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["13:45 - 14:30", "14:30 - 15:15"],
            "Jueves": ["11:30 - 12:15", "12:15 - 13:00"], 
            "Viernes": ["13:45 - 14:30", "14:30 - 15:15"],
              },
            "E1": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45", "13:45 - 14:30", "14:30 - 15:15"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
            "Viernes": ["18:15 - 19:00", "19:00 - 19:45"],  
              },
            "E2": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
            "Viernes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Jueves": ["15:15 - 16:00", "16:00 - 16:45"],
              },
            "E3": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
            "Viernes": ["18:15 - 19:00", "19:00 - 19:45"],
            "Jueves": ["18:15 - 19:00", "19:00 - 19:45"],
             },
            "F1": { 
            "Lunes": ["08:30 - 09:15", "09:15 - 10:00"],
            "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30", "15:15 - 16:00", "16:00 - 16:45"],
              },
            "F2": { 
            "Lunes": ["08:30 - 09:15", "09:15 - 10:00"],
            "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Miércoles": ["15:15 - 16:00", "16:00 - 16:45"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
              },
            "F3": { 
            "Lunes": ["08:30 - 09:15", "09:15 - 10:00"],
            "Martes": ["10:00 - 10:45", "10:45 - 11:30", "15:15 - 16:00", "16:00 - 16:45"],
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
            },
           },
            "MED203": { // Código de la materia
            "A1": { 
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
            "Miércoles": ["11:30 - 12:15", "12:15 - 13:00"],
            },
            "A2": { 
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
              },
            "A3": { 
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30", "08:30 - 09:15", "09:15 - 10:00"],
             },
            "B1": { 
            "Miércoles": ["15:15 - 16:00", "16:00 - 16:45"], 
            "Martes": ["15:15 - 16:00", "16:00 - 16:45"],
              },
            "B2": { 
            "Miércoles": ["15:15 - 16:00", "16:00 - 16:45"], 
            "Martes": ["18:15 - 19:00", "19:00 - 19:45"], 
              },
            "B3": { 
            "Miércoles": ["15:15 - 16:00", "16:00 - 16:45"], 
            "Martes": ["16:45 - 17:30", "17:30 - 18:15"], 
             },
            "C1": { 
            "Viernes": ["10:00 - 10:45", "10:45 - 11:30", "08:30 - 09:15", "09:15 - 10:00"], 
               },
            "C2": { 
            "Viernes": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"], 
                },
            "C3": { 
            "Viernes": ["10:00 - 10:45", "10:45 - 11:30", "07:00 - 07:45", "07:45 - 08:30"], 
           },
            "D1": { 
            "Jueves": ["13:45 - 14:30", "14:30 - 15:15"], 
            "Lunes": ["13:45 - 14:30", "14:30 - 15:15"], 
           },
            "D2": { 
            "Jueves": ["13:45 - 14:30", "14:30 - 15:15"], 
            "Lunes": ["15:15 - 16:00", "16:00 - 16:45"],   
              },
            "D3": { 
            "Jueves": ["13:45 - 14:30", "14:30 - 15:15"], 
            "Lunes": ["16:45 - 17:30", "17:30 - 18:15"], 
            },
            "E1": { 
            "Viernes": ["12:15 - 13:00", "13:00 - 13:45"], 
            "Miércoles": ["13:45 - 14:30", "14:30 - 15:15"],  
             },
            "E2": { 
            "Viernes": ["12:15 - 13:00", "13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15"], 
            },
            "E3": { 
            "Viernes": ["12:15 - 13:00", "13:00 - 13:45"], 
            "Miércoles": ["15:15 - 16:00", "16:00 - 16:45"],  
           },
            "F1": { 
            "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"],
            "Sábado": ["08:30 - 09:15", "09:15 - 10:00"],  
           },
            "F2": { 
            "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"],    
            "Sábado": ["10:00 - 10:45", "10:45 - 11:30"],
              },
            "F3": { 
            "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"],    
            "Sábado": ["11:30 - 12:15", "12:15 - 13:00"],
               },
            "G1": { 
            "Jueves": ["16:45 - 17:30", "17:30 - 18:15"],    
            "Sábado": ["11:30 - 12:15", "12:15 - 13:00"],
              },
            "G2": { 
            "Jueves": ["16:45 - 17:30", "17:30 - 18:15"],    
            "Sábado": ["08:30 - 09:15", "09:15 - 10:00"],
               },
            "G3": { 
            "Jueves": ["16:45 - 17:30", "17:30 - 18:15"],    
            "Sábado": ["10:00 - 10:45", "10:45 - 11:30"],
         },
           },
            "MED209": { // Código de la materia
            "A1": { 
            "Viernes": ["07:00 - 07:45", "07:45 - 08:30"],
            "Jueves": ["08:30 - 09:15", "09:15 - 10:00"], 
          },
            "A2": { 
            "Viernes": ["07:00 - 07:45", "07:45 - 08:30"],
            "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"], 
           },
            "A3": { 
            "Viernes": ["07:00 - 07:45", "07:45 - 08:30"],
            "Jueves": ["11:30 - 12:15", "12:15 - 13:00"],    
           },
            "B1": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30", "08:30 - 09:15", "09:15 - 10:00"],
              },
            "B2": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
               },
            "B3": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Miércoles": ["10:00 - 10:45", "10:45 - 11:30"], 
               },
            "C1": { 
            "Martes": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
              },
            "C2": { 
            "Martes": ["10:00 - 10:45", "10:45 - 11:30", "08:30 - 09:15", "09:15 - 10:00"],
              },
            "C3": { 
            "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Miércoles": ["08:30 - 09:15", "09:15 - 10:00"],   
             },
            "D1": { 
            "Viernes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"], 
              },
            "D2": { 
            "Viernes": ["13:45 - 14:30", "14:30 - 15:15", "16:45 - 17:30", "17:30 - 18:15"], 
               },
            "D3": { 
            "Viernes": ["13:45 - 14:30", "14:30 - 15:15", "18:15 - 19:00", "19:00 - 19:45"],  
               },
            "E1": { 
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["08:30 - 09:15", "09:15 - 10:00"], 
              },
            "E2": { 
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["11:30 - 12:15", "12:15 - 13:00"], 
              },
            "E3": { 
            "Jueves": ["10:00 - 10:45", "10:45 - 11:30"],
            "Martes": ["10:00 - 10:45", "10:45 - 11:30"], 
               },
            "F1": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Viernes": ["13:00 - 13:45", "13:45 - 14:30"], 
                },
            "F2": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30"],
            "Jueves": ["13:00 - 13:45", "13:45 - 14:30"],
              },
            "F3": { 
            "Lunes": ["10:00 - 10:45", "10:45 - 11:30", "13:00 - 13:45", "13:45 - 14:30"],
          },
           },
            "SAP200": { // Código de la materia
            "A1": { 
            "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"], 
              },
              "B1": { 
            "Viernes": ["15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"], 
                 },
              "C1": { 
            "Lunes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
              },
              "D1": { 
            "Jueves": ["17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45", "19:45 - 20:30"],  
             },
              "E1": { 
            "Viernes": ["15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15"], 
            },
              "F1": { 
            "Lunes": ["18:15 - 19:00", "19:00 - 19:45"],     
            "Miércoles": ["19:45 - 20:30", "20:30 - 21:15"],       
          },
           },
            "SAP300": { // Código de la materia
            "A1": { 
            "Miércoles": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
              },
              "B1": { 
            "Jueves": ["13:45 - 14:30", "14:30 - 15:15"],
            "Viernes": ["13:45 - 14:30", "14:30 - 15:15"],
          },
              "C1": { 
            "Sábado": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],     
          }, 
        }
        
        // ... (resto de los horarios de las materias)
    };

    // Textos personalizados para cada materia, grupo y subgrupo
    const textosPersonalizados = {
        "MED200": {
            "A1": "Dr. Machado",
            "A2": "Dr. Machado",
            "A3": "Dr. Machado",
	    "B1": "Dr. Sangüeza",
	    "B2": "Dr. Sangüeza",
            "B3": "Dr. Sangüeza",
            "C1": "Dr. Sangüeza",
	    "C2": "Dr. Sangüeza",
            "C3": "Dr. Sangüeza",
            "D1": "Dr. Machado",
            "D2": "Dr. Machado",
	    "D3": "Dr. Machado",
	    "E1": "Dr. Machado",
            "E2": "Dr. Machado",
            "E3": "Dr. Machado",
	    "F1": "Dr. Machado",
	    "F2": "Dr. Machado",
	    "F3": "Dr. Machado",
            // Agrega más textos para otros grupos y subgrupos
        },
        "MED201": {
            "A1": "Dra. Chely",
            "A2": "Dra. Chely",
            "A3": "Dra. Chely",
	    "B1": "Dra. Araúz",
	    "B2": "Dra. Araúz",
            "B3": "Dra. Araúz",
            "C1": "Dra. Chely",
	    "C2": "Dra. Chely",
            "C3": "Dra. Chely",
            "D1": "Dra. Chely",
            "D2": "Dra. Chely",
	    "D3": "Dra. Chely",
	    "E1": "Dra. Araúz",
            "E2": "Dra. Araúz",
            "E3": "Dra. Araúz",
	    "F1": "Dra. Tapia",
	    "F2": "Dra. Tapia",
	    "F3": "Dra. Tapia",
            // Agrega más textos para otros grupos y subgrupos
},
        "MED202": {
            "A1": "Invitado",
            "A2": "Invitado",
            "A3": "Invitado",
	    "B1": "Dr. Williams",
	    "B2": "Dr. Williams",
            "B3": "Dr. Williams",
            "C1": "Invitado",
	    "C2": "Invitado",
            "C3": "Invitado",
            "D1": "Dr. Méndez",
            "D2": "Dr. Méndez",
	    "D3": "Dr. Méndez",
	    "E1": "Invitado",
            "E2": "Invitado",
            "E3": "Invitado",
	    "F1": "Dr. Méndez",
	    "F2": "Dr. Méndez",
	    "F3": "Dr. Méndez",
            // Agrega más textos para otros grupos y subgrupos
},
        "MED203": {
            "A1": "Dra. Quiroz",
            "A2": "Dra. Quiroz",
            "A3": "Dra. Quiroz",
	    "B1": "Dra. Pinto",
	    "B2": "Dra. Pinto",
            "B3": "Dra. Pinto",
            "C1": "Dra. Quiroz",
	    "C2": "Dra. Quiroz",
            "C3": "Dra. Quiroz",
            "D1": "Dra. Pinto",
            "D2": "Dra. Pinto",
	    "D3": "Dra. Pinto",
	    "E1": "Dra. Hidalgo",
            "E2": "Dra. Hidalgo",
            "E3": "Dra. Hidalgo",
	    "F1": "Dra. Quiroz",
	    "F2": "Dra. Quiroz",
	    "F3": "Dra. Quiroz",
	    "G1": "Invitado",
	    "G2": "Invitado",
	    "G3": "Invitado",
},
        "MED209": {
            "A1": "Dr. Cuéllar",
            "A2": "Dr. Cuéllar",
            "A3": "Dr. Cuéllar",
	    "B1": "Dra. Quiroz",
	    "B2": "Dra. Quiroz",
            "B3": "Dra. Quiroz",
            "C1": "Dra. Quiroz",
	    "C2": "Dra. Quiroz",
            "C3": "Dra. Quiroz",
            "D1": "Dra. Araúz",
            "D2": "Dra. Araúz",
	    "D3": "Dra. Araúz",
	    "E1": "Dr. Ortiz",
            "E2": "Dr. Ortiz",
            "E3": "Dr. Ortiz",
	    "F1": "Dr. Saavedra",
	    "F2": "Dr. Saavedra",
	    "F3": "Dr. Saavedra",
            // Agrega más textos para otros grupos y subgrupos
},
        "SAP200": {
            "A1": "Dr. Leaño",
	    "B1": "Invitado",
            "C1": "Dr. Leaño",
            "D1": "Dr. Leaño",
	    "E1": "Dr. Leaño",
	    "F1": "Dr. Prieto",

            // Agrega más textos para otros grupos y subgrupos
},
        "SAP300": {
            "A1": "Dr. Sánchez",
	    "B1": "Dr. Méndez",
            "C1": "Dra. Zambrana",
 
            // Agrega más textos para otros grupos y subgrupos

            // Agrega más textos para otros grupos y subgrupos

        },
        // Agrega más materias y sus textos personalizados
    };

    // Horarios disponibles
    const horarios = [
        "07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00",
        "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00",
        "13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00",
        "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00",
        "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00",
        "22:00 - 22:45"
    ];

    // Días de la semana (incluyendo Sábado)
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    // Elementos del DOM
    const seleccionMaterias = document.getElementById("seleccionMaterias");
    const botonMostrarHorario = document.getElementById("mostrarHorario");
    const tabla = document.getElementById("horario");

    // Generar checkboxes para seleccionar materias
    for (const codigo in materias) {
        const materia = materias[codigo];

        // Crear contenedor para la materia
        const contenedorMateria = document.createElement("div");
        contenedorMateria.classList.add("contenedor-materia");

        // Checkbox para la materia
        const labelMateria = document.createElement("label");
        const checkboxMateria = document.createElement("input");
        checkboxMateria.type = "checkbox";
        checkboxMateria.value = codigo;
        checkboxMateria.id = `materia-${codigo}`;
        checkboxMateria.addEventListener("change", function () {
            actualizarGrupos(codigo);
        });
        labelMateria.appendChild(checkboxMateria);
        labelMateria.appendChild(document.createTextNode(materia.nombre));
        contenedorMateria.appendChild(labelMateria);

        // Contenedor para grupos y subgrupos
        const contenedorGrupos = document.createElement("div");
        contenedorGrupos.id = `grupos-${codigo}`;
        contenedorGrupos.style.display = "none"; // Ocultar inicialmente
        contenedorMateria.appendChild(contenedorGrupos);

        seleccionMaterias.appendChild(contenedorMateria);
    }

    // Función para actualizar los grupos de una materia seleccionada
    function actualizarGrupos(codigo) {
        const contenedorGrupos = document.getElementById(`grupos-${codigo}`);
        const checkboxMateria = document.getElementById(`materia-${codigo}`);

        if (checkboxMateria.checked) {
            contenedorGrupos.innerHTML = ""; // Limpiar grupos anteriores

            const materia = materias[codigo];
            for (let i = 0; i < materia.grupos; i++) {
                const grupo = String.fromCharCode(65 + i); // A, B, C, ...

                // Checkbox para el grupo
                const labelGrupo = document.createElement("label");
                const checkboxGrupo = document.createElement("input");
                checkboxGrupo.type = "checkbox";
                checkboxGrupo.value = grupo;
                checkboxGrupo.id = `grupo-${codigo}-${grupo}`;
                checkboxGrupo.addEventListener("change", function () {
                    actualizarSubgrupos(codigo, grupo);
                });
                labelGrupo.appendChild(checkboxGrupo);
                labelGrupo.appendChild(document.createTextNode(`Grupo ${grupo}`));
                contenedorGrupos.appendChild(labelGrupo);

                // Contenedor para subgrupos
                const contenedorSubgrupos = document.createElement("div");
                contenedorSubgrupos.id = `subgrupos-${codigo}-${grupo}`;
                contenedorSubgrupos.style.display = "none"; // Ocultar inicialmente
                contenedorGrupos.appendChild(contenedorSubgrupos);
            }

            contenedorGrupos.style.display = "block"; // Mostrar grupos
        } else {
            contenedorGrupos.style.display = "none"; // Ocultar grupos si la materia no está seleccionada
        }
    }

    // Función para actualizar los subgrupos de un grupo seleccionado
    function actualizarSubgrupos(codigo, grupo) {
        const contenedorSubgrupos = document.getElementById(`subgrupos-${codigo}-${grupo}`);
        const checkboxGrupo = document.getElementById(`grupo-${codigo}-${grupo}`);

        if (checkboxGrupo.checked) {
            contenedorSubgrupos.innerHTML = ""; // Limpiar subgrupos anteriores

            const materia = materias[codigo];
            for (let j = 1; j <= materia.subgrupos; j++) {
                const subgrupo = `${grupo}${j}`; // A1, A2, A3, ...

                // Checkbox para el subgrupo
                const labelSubgrupo = document.createElement("label");
                const checkboxSubgrupo = document.createElement("input");
                checkboxSubgrupo.type = "checkbox";
                checkboxSubgrupo.value = subgrupo;
                checkboxSubgrupo.id = `subgrupo-${codigo}-${grupo}-${j}`;
                labelSubgrupo.appendChild(checkboxSubgrupo);
                labelSubgrupo.appendChild(document.createTextNode(subgrupo)); // Solo el código del subgrupo
                contenedorSubgrupos.appendChild(labelSubgrupo);
            }

            contenedorSubgrupos.style.display = "block"; // Mostrar subgrupos
        } else {
            contenedorSubgrupos.style.display = "none"; // Ocultar subgrupos si el grupo no está seleccionado
        }
    }

    // Función para generar la tabla de horarios
    function generarTabla() {
        tabla.innerHTML = ""; // Limpiar tabla

        // Crear fila de días
        const filaDias = document.createElement("tr");
        filaDias.appendChild(document.createElement("th")); // Celda vacía para los horarios
        dias.forEach(dia => {
            const th = document.createElement("th");
            th.textContent = dia;
            filaDias.appendChild(th);
        });
        tabla.appendChild(filaDias);

        // Crear filas de horarios
        horarios.forEach(horario => {
            const fila = document.createElement("tr");
            const th = document.createElement("th");
            th.textContent = horario;
            fila.appendChild(th);

            dias.forEach(dia => {
                const td = document.createElement("td");

                let contenido = "";
                let horariosCruzados = []; // Para detectar horarios cruzados

                for (const codigo in materias) {
                    const materia = materias[codigo];
                    const checkboxMateria = document.getElementById(`materia-${codigo}`);

                    if (checkboxMateria.checked) {
                        for (let i = 0; i < materia.grupos; i++) {
                            const grupo = String.fromCharCode(65 + i); // A, B, C, ...
                            const checkboxGrupo = document.getElementById(`grupo-${codigo}-${grupo}`);

                            if (checkboxGrupo.checked) {
                                for (let j = 1; j <= materia.subgrupos; j++) {
                                    const subgrupo = `${grupo}${j}`; // A1, A2, A3, ...
                                    const checkboxSubgrupo = document.getElementById(`subgrupo-${codigo}-${grupo}-${j}`);

                                    if (checkboxSubgrupo.checked) {
                                        // Verificar si hay horarios específicos para este subgrupo y día
                                        const horariosEspecificos = horariosMaterias[codigo]?.[subgrupo]?.[dia];
                                        if (horariosEspecificos && horariosEspecificos.includes(horario)) {
                                            contenido += `<strong>${materia.nombre}</strong><br>`;
                                            contenido += `${subgrupo}<br>`; // Solo el código del subgrupo

                                            // Agregar texto personalizado si existe
                                            const textoPersonalizado = textosPersonalizados[codigo]?.[subgrupo];
                                            if (textoPersonalizado) {
                                                contenido += `${textoPersonalizado}<br>`;
                                            }

                                            horariosCruzados.push({ materia: materia.nombre, subgrupo });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                // Si hay más de un horario cruzado, destacar en rojo
                if (horariosCruzados.length > 1) {
                    td.style.backgroundColor = "#ffcccc"; // Fondo rojo
                    contenido = horariosCruzados.map(h => `<strong>${h.materia}</strong><br>${h.subgrupo}`).join("<br>");
                }

                td.innerHTML = contenido;
                fila.appendChild(td);
            });

            tabla.appendChild(fila);
        });
    }

    // Event listener para el botón "Mostrar/Ocultar Horario"
    botonMostrarHorario.addEventListener("click", function () {
        generarTabla();
    });

    // Generar tabla inicial vacía
    generarTabla();
});
