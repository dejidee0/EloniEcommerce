/** @jsxImportSource theme-ui */
import seller_bg_image from "../../../assets/signup-background-image.svg"


function EmailForm() {
  
  return (
    <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: "10rem", backgroundColor: "#f5f5f5", placeContent: "center", gap: "4rem", height: "100vh", 
    
}}>

    <div >
        <img src={seller_bg_image} alt="seller bg image"   />
    </div>
    <div sx={{marginTop: "1rem"}} >
        <form  sx={{ width: "28rem", textAlign: "center"}}>
            <div sx={{marginBottom: "1.5rem"}}>
            <h1 sx={{
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "24px", letterSpacing: "0.15px", marginBottom: 2
            }}>Setup your account</h1>
            <h5 sx={{
                fontSize: "12px", color: "#0009", fontWeight: 400
            }}>Please provide your email address to create your seller account</h5>
            </div>
            <div sx={{background: "#fff", padding: "34px 24.9px 20px 24.49px", borderRadius: "8px", width: "100%", marginTop: 4  }}>
          
            <div sx={{width: "100%", textAlign: "left",   cursor: "pointer", marginBottom: "10px",
             position: "relative",
             fontWeight: 400, fontSize: "14px",
            ":focus-within label": {
                color: "red",
                transform: "translate(5px, -28px) ", zIndex: "1111px", lineHeight: "20px", height: "20px", fontSize: "14px"

            }
            }}
           
            
            >
           <input type="email" sx={{width: "100%", padding: "15px 12px", outline: "none", lineHeight: "20px", fontSize: "18px", '&:focus': {
            color: "red", border: "2px solid red", zIndex: 1
           },
          
           }} />
           <label htmlFor="email"  sx={{position: "absolute", display: "block", margin: "0 20px", top: "18px", background: "#fff", cursor: "pointer",  transition: "0.2s ease",
            transform: "translate(0)",
       
        }}>Email Address *</label>
           
            </div>
            <div sx={{width: "100%", textAlign: "left",   cursor: "pointer", marginBottom: "10px",
             position: "relative",
             fontWeight: 400, fontSize: "14px",
            ":focus-within label": {
                color: "red",
                transform: "translate(5px, -28px) ", zIndex: "1111px", lineHeight: "20px", height: "20px", fontSize: "14px"

            }
            }}
           
            
            >
           <input type="email" sx={{width: "100%", padding: "15px 12px", outline: "none", lineHeight: "20px", fontSize: "18px", '&:focus': {
            color: "red", border: "2px solid red", zIndex: 1
           },
          
           }} />
           <label htmlFor="email"  sx={{position: "absolute", display: "block", margin: "0 20px", top: "18px", background: "#fff", cursor: "pointer",  transition: "0.2s ease",
            transform: "translate(0)",
       
        }}>Enter the verification code *</label>
           
            </div>
          
            <button sx={{width: "100%", padding: "15px 20px", marginBottom: "10px", cursor: "pointer", background: "#f68B1e", border: "none", color: "#fff",  }}>VERIFY</button>
            <button sx={{width: "100%", padding: "15px 20px", marginBottom: "10px", cursor: "pointer", color: "#f68B1e", border: "1px solid #ddd", background: "#fff",   }}>RESEND CODE </button>

            </div>
            
        </form>
    </div>

</div>
  )
}

export default EmailForm