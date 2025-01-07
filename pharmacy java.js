/* General Styles and Body Styles */
       * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 2vw;
            background-color: #f4f4f4;
            background-image: url('./bg pic edit.webp');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        .container {
            max-width: 100%;
            margin: 0 auto;
            padding: 20px;
            background-color: rgb(57, 165, 236);
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
        }

        .medicine-section {
            margin-bottom: 20px;
        }

        .medicine-section h2 {
            margin-bottom: 10px;
        }

        .medicine-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .medicine-item {
            background: #fff;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: calc(33.33% - 20px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .medicine-item label {
            display: block;
            margin-bottom: 5px;
        }

        .medicine-item input {
            width: 100%;
            padding: 5px;
            margin-top: 5px;
        }

        .btn {
            display: block;
            width: 100%;
            padding: 10px;
            background: #28a745;
            color: white;
            text-align: center;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }

        .btn:hover {
            background: #218838;
        }

        .order-summary {
            margin-top: 20px;
            padding: 20px;
            background: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .order-summary table {
            width: 100%;
            border-collapse: collapse;
        }

        .order-summary table th,
        .order-summary table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        .order-summary table th {
            background: #f4f4f4;
        }

        .order-summary .total {
            font-weight: bold;
            text-align: right;
        }
        font-family: Arial, sans-serif;
    
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: Arial, sans-serif;
        background-color:rgb(217, 245, 253);
    }
    
    header {
        width: 100%;
        border-bottom: 2px solid #0e0e0e;
    }
    
    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: lightskyblue;
    }
    
    .logo img {
        margin-left: 100px;
        height: 100px;
        width: 100px;
    }
    .logo h1{
        margin-bottom:20px;
        text-align: center;
    }
    
    .contact-info {
        display: flex;
        gap: 20px;
    }
    
    .contact-info div {
        display: flex;
        align-items: center;
    }
    
    .contact-info img {
        height: 20px;
        margin-right: 5px;
    }
    
    .search-social {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .search-social input {
        padding: 5px;
    }
    
    .search-social button {
        padding: 5px 10px;
    }
    
    .social-icons img {
        height: 20px;
        margin-left: 10px;
    }
    
    .main-nav {
        display: flex;
        justify-content: space-around;
        background-color:rgb(5, 5, 48);
        padding: 10px;
    }
    
    .main-nav a {
        text-align: end;
        padding: 10px 20px;
        color:rgb(246, 245, 245);
        font-weight: bold;
        border-radius: 5px;
        font-size: large;
    }
    
    .main-heading {
        text-align: center;
        padding: 40px 0;
        background-color: #ddd;
    }
    
    .main-heading h1 {
        font-size: 36px;
        color: #333;
    }
    
    .services-section {
        text-align: center;
        padding: 40px 0;
    }
    
    .services-section h2 {
        font-size: 28px;
        color: #333;
        margin-bottom: 20px;
    }
    
    .services-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 20px;
    }
    
    .service-block {
        border: 1px solid #ccc;
        padding: 10px;
    }
    
    .image-placeholder {
        width: 150%;
        height: 150px;
        background-color: #ddd;
    }
    
    .doctors {
        padding: 20px;
        text-align: center;
    }
    
    .doctors h2 {
        margin-bottom: 20px;
        font-size: 24px;
    }
    
    .doctor-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        gap: 20px;
        padding: 0 20px;
    }
    
    .doctor-card {
        text-align: center;
        background-color: #a2d7f2;
        padding: 15px;
        border: 3px solid #080808;
        border-radius: 8px;
    }
    
    .doctor-card img {
        width: 100%;
        height: auto;
        max-width: 150px; 
        height: 150px;
        object-fit: cover; 
        border-radius: 0; 
    }
    
    .text-placeholder p {
        margin: 10px 0;
        color: #555;
    }
    
    
    
    /* Footer Styles */
    footer {
        background-color: #585656;
        padding: 20px;
        border-top: 3px solid #ccc;
    }
    
    .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .footer-logo, .footer-social, .footer-address, .footer-contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        text-align: center;
        padding: 10px;
    }
    
    .footer-logo img {
        width: 80px;
        height: 80px;
    }
    
    .footer-social span {
        margin: 0 10px;
    }
    
    .footer-social img {
        width: 30px;
        height: 30px;
    }
    
    .footer-address p, .footer-contact p {
        margin: 5px 0;
        font-size: 14px;
    }
    
    .footer-contact img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
        vertical-align: middle;
    }