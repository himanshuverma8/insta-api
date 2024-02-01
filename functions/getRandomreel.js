const stringArray = ["https://www.instagram.com/p/C2cs9_gS6aa/","https://www.instagram.com/p/C2Z_AlMylMY/","https://www.instagram.com/p/C0vVzIZvWEq/","https://www.instagram.com/p/C2h-OJwyMAa/","https://www.instagram.com/p/C2hMsopNH3E/","https://www.instagram.com/p/C2iJcmBBbat/","https://www.instagram.com/p/C2kBqHLC3uh/","https://www.instagram.com/p/C2e7pYVL-Sg/","https://www.instagram.com/p/C2bwrhNSkin/","https://www.instagram.com/p/C2ShYM5xvAX/","https://www.instagram.com/p/C2WZLBMJiRJ/","https://www.instagram.com/p/C1doZWRvSOE/","https://www.instagram.com/p/C19f6_zvOjb/","https://www.instagram.com/p/C185mvQyQky/","https://www.instagram.com/p/C01rXUev03m/","https://www.instagram.com/p/C0-ovNjPmi-/","https://www.instagram.com/p/C1rN7dXP4-R/","https://www.instagram.com/p/C2UjASFhYLX/","https://www.instagram.com/p/C2c5hIjSB7u/","https://www.instagram.com/p/C1op9wBPXNe/","https://www.instagram.com/p/C2PdLcdojCT/","https://www.instagram.com/p/C2NX25MPYQc/","https://www.instagram.com/p/C2VI-JIMOMs/","https://www.instagram.com/p/Cy_Qkp1sNWG/","https://www.instagram.com/p/C2C00ysSb8k/","https://www.instagram.com/p/C2MwHBOuYXb/","https://www.instagram.com/p/C2Zx3lkS1U8/","https://www.instagram.com/p/C2ReB5NK93d/","https://www.instagram.com/p/C1_bUTaNCuu/","https://www.instagram.com/p/C2IalxnMcRg/","https://www.instagram.com/p/C1BZg2uLJxG/","https://www.instagram.com/p/C1616iDpyhG/","https://www.instagram.com/p/C1hk0wQsymF/","https://www.instagram.com/p/C2Htm7NoZe1/","https://www.instagram.com/p/CzOK1_jI31Z/","https://www.instagram.com/p/C09HjTeSG11/","https://www.instagram.com/p/C2KNbH2K1T8/","https://www.instagram.com/p/C2CMSyDuJQJ/","https://www.instagram.com/p/C11OouANn8e/","https://www.instagram.com/p/Cz-oWf7yx82/","https://www.instagram.com/p/C1zVu3MyjC9/","https://www.instagram.com/p/C15pefxxKQF/","https://www.instagram.com/p/C1Mk-1usVcM/","https://www.instagram.com/p/C1ZVNGlyvpO/","https://www.instagram.com/p/C1pHPRLRDOo/","https://www.instagram.com/p/C195UZxRXmO/","https://www.instagram.com/p/C184O4AS7jW/","https://www.instagram.com/p/C2H4_E_hBjv/","https://www.instagram.com/p/C2CNbvWp_WZ/","https://www.instagram.com/p/C18y61yPDpB/","https://www.instagram.com/p/C2C5HErxG_o/","https://www.instagram.com/p/C2AFWpYPIGr/","https://www.instagram.com/p/C11bNORrwwa/","https://www.instagram.com/p/C12POQyvw2C/","https://www.instagram.com/p/C17u2V5hS2y/","https://www.instagram.com/p/C1mkUWEI11N/","https://www.instagram.com/p/C18giNkrQAu/","https://www.instagram.com/p/C1t7LqQR7WG/","https://www.instagram.com/p/C19PHZus04k/","https://www.instagram.com/p/C0MNJiRoeXW/","https://www.instagram.com/p/C131qOUP4dO/","https://www.instagram.com/p/C1sHTiuvNHQ/","https://www.instagram.com/p/C13gmtNoblN/","https://www.instagram.com/p/C1zfQUMv82m/","https://www.instagram.com/p/C1uW4N5oHJR/","https://www.instagram.com/p/C1r-pLkSHfX/","https://www.instagram.com/p/C1mwwKURv2B/","https://www.instagram.com/p/C1uOTuWpZSH/","https://www.instagram.com/p/C1uA3D2Rg2Q/","https://www.instagram.com/p/C0hLJBlJc91/","https://www.instagram.com/p/C1MgudwvBEP/","https://www.instagram.com/p/C1PQ5TwovUl/","https://www.instagram.com/p/C0MkLWPoMHG/","https://www.instagram.com/p/CzJM7t3PZKZ/","https://www.instagram.com/p/C1HiRqRom2T/","https://www.instagram.com/p/C1OPHWBLvs4/","https://www.instagram.com/p/C0Wo_y0Rn2f/","https://www.instagram.com/p/C1W7ty8PR8A/","https://www.instagram.com/p/C1Y-cCas2oI/","https://www.instagram.com/p/C1L9VMDI-d6/","https://www.instagram.com/p/C0_pofOvLcu/","https://www.instagram.com/p/C1PMC6JhWSa/","https://www.instagram.com/p/C01h9qLyYqF/","https://www.instagram.com/p/C1evne_yJw-/","https://www.instagram.com/p/C1g-zYNynVf/","https://www.instagram.com/p/C1d0O0mK8ny/","https://www.instagram.com/p/C00nFG_IyOG/","https://www.instagram.com/p/C1E0T9IyzB3/","https://www.instagram.com/p/C1ZrsYstDMw/","https://www.instagram.com/p/C1MOBD9vDHB/","https://www.instagram.com/p/C1W9o3BxYRB/","https://www.instagram.com/p/C1MfCqix7Zy/","https://www.instagram.com/p/C05wxH2hDLY/","https://www.instagram.com/p/C1cKzYLSbJi/","https://www.instagram.com/p/C1HRPrevKpU/","https://www.instagram.com/p/C1XXZdTJ4nR/","https://www.instagram.com/p/C1W52ASy9Tv/","https://www.instagram.com/p/CzoGaFcrDEr/","https://www.instagram.com/p/C1GV_EeCnEI/","https://www.instagram.com/p/C1BgjnILy9G/","https://www.instagram.com/p/Czp4cMBtnPW/","https://www.instagram.com/p/C0oF13hL2bF/","https://www.instagram.com/p/C0yIGwDJGk1/","https://www.instagram.com/p/C0ysIIQP_-r/","https://www.instagram.com/p/C0eOcRrRE3M/","https://www.instagram.com/p/CzyVqpdI_HN/","https://www.instagram.com/p/C1JIiXspI3H/","https://www.instagram.com/p/C1GgLrdBjmU/","https://www.instagram.com/p/C1HVBKirwip/","https://www.instagram.com/p/C1CckK0RV-0/","https://www.instagram.com/p/C1HGHt7JaUw/","https://www.instagram.com/p/C1PURKZJGaP/","https://www.instagram.com/p/C1TaPPGRVxk/","https://www.instagram.com/p/C1Ts3oYpGnA/","https://www.instagram.com/p/C1PgmYbMt9D/","https://www.instagram.com/p/C1O6jUFrZHt/","https://www.instagram.com/p/C1EjuX4rE84/","https://www.instagram.com/p/C0o2s1VR3mm/","https://www.instagram.com/p/C1CZrdioAxC/","https://www.instagram.com/p/C1L7JEoh70_/","https://www.instagram.com/p/C0g-gOIIzQV/","https://www.instagram.com/p/C0APAi5yrx6/","https://www.instagram.com/p/C1HFPq0pD5B/","https://www.instagram.com/p/CzNjtRpPmg1/","https://www.instagram.com/p/C0-3ObRvn49/","https://www.instagram.com/p/C0G6m9CIhFC/","https://www.instagram.com/p/C1G7GzstTuY/","https://www.instagram.com/p/C0f25K8Lw7i/","https://www.instagram.com/p/C0g6Fy6rep-/","https://www.instagram.com/p/C1KSaIISahW/","https://www.instagram.com/p/C0WkspDSXAF/","https://www.instagram.com/p/C0uDQGhMDEZ/","https://www.instagram.com/p/C0Ten9ttlwS/","https://www.instagram.com/p/C1BtmjHpKd_/","https://www.instagram.com/p/C1Cd5GmyBCO/","https://www.instagram.com/p/C0gy-gxSubh/","https://www.instagram.com/p/C09S8f_tkBG/","https://www.instagram.com/p/C06dXQXI0V5/","https://www.instagram.com/p/C1AIncPJ0h2/","https://www.instagram.com/p/C06CX_wpRAx/","https://www.instagram.com/p/C0qZN33rY7Z/","https://www.instagram.com/p/C0B97HHIryo/","https://www.instagram.com/p/C02DMChsHGo/","https://www.instagram.com/p/CyN-dSQxmqQ/","https://www.instagram.com/p/C0hUNfJKadH/","https://www.instagram.com/p/C0MEXKeo9_c/","https://www.instagram.com/p/C0WWbOhImpg/","https://www.instagram.com/p/C0whFYCPowx/","https://www.instagram.com/p/C0kcalSuVFZ/","https://www.instagram.com/p/C0y5PRnSfIQ/","https://www.instagram.com/p/Cz0xhmYJbeg/","https://www.instagram.com/p/Czu3gP2oCxS/","https://www.instagram.com/p/Czvac7vIKte/","https://www.instagram.com/p/C0PFtD1ynQb/","https://www.instagram.com/p/C0JdLeApgnu/","https://www.instagram.com/p/C0AVfvzvI5-/","https://www.instagram.com/p/Cz2yTuBpFh0/","https://www.instagram.com/p/CyfbfmAsvWG/","https://www.instagram.com/p/C0UJjX8PYE7/","https://www.instagram.com/p/CxZeZojP7yL/","https://www.instagram.com/p/C0cQ8Lnyze2/","https://www.instagram.com/p/CztxUJyPxqY/","https://www.instagram.com/p/C0BUU6UyWmZ/","https://www.instagram.com/p/C0B2Z2pvOpX/","https://www.instagram.com/p/CzAdPv2yvKk/","https://www.instagram.com/p/CzY7Z6uPuR8/","https://www.instagram.com/p/Cy7dDzeRirN/","https://www.instagram.com/p/CyguaBWr673/","https://www.instagram.com/p/CzvhopyyZPy/","https://www.instagram.com/p/CzohkH5P-BP/","https://www.instagram.com/p/CxQfcslBWXI/","https://www.instagram.com/p/Cx-plRiNi6I/","https://www.instagram.com/p/CzgYCnaobWz/","https://www.instagram.com/p/CzRLBFNI2Zw/","https://www.instagram.com/p/CztPiKxIJxd/","https://www.instagram.com/p/Cy3ezj-Swg-/","https://www.instagram.com/p/CzDJH3TL4pg/","https://www.instagram.com/p/Czv8cP3vWwe/","https://www.instagram.com/p/Czx8nO-rNo3/","https://www.instagram.com/p/CwmojvPrBbL/","https://www.instagram.com/p/CxTA9HRoBIs/","https://www.instagram.com/p/Czd50TzP7AC/","https://www.instagram.com/p/CzdgCeLSvXQ/","https://www.instagram.com/p/CzoHYMAMfo3/","https://www.instagram.com/p/CzTxMh3pkVk/","https://www.instagram.com/p/CwGVceZsw9z/","https://www.instagram.com/p/Czm5QG0qVvp/","https://www.instagram.com/p/Czdp_3uOjxY/","https://www.instagram.com/p/CzJVUMpNoXA/","https://www.instagram.com/p/CzWLFaLv8UY/","https://www.instagram.com/p/CzLVbnESS0Z/","https://www.instagram.com/p/CwsEzRhM11Y/","https://www.instagram.com/p/CwpW0BZvb_j/","https://www.instagram.com/p/CxKbROgo_lJ/","https://www.instagram.com/p/CxXMPiWy2Yk/","https://www.instagram.com/p/Czi1FpvJSu_/","https://www.instagram.com/p/CzeQroKNpXJ/","https://www.instagram.com/p/Czfbu8GIdt5/","https://www.instagram.com/p/CzSlIAYSsQs/","https://www.instagram.com/p/CzbPv9jyQm8/","https://www.instagram.com/p/CxyHcfWMnZ0/","https://www.instagram.com/p/CzAB9waouh4/","https://www.instagram.com/p/CzbQQEnoKeE/","https://www.instagram.com/p/CzJX9DHSPBr/","https://www.instagram.com/p/CzTwrYpxNHC/","https://www.instagram.com/p/CyditoVpU9Q/","https://www.instagram.com/p/Cv-Ica4ICL8/","https://www.instagram.com/p/CybO22uy41q/","https://www.instagram.com/p/CzFtbSAP9Jy/","https://www.instagram.com/p/CzB4U17PZ8A/","https://www.instagram.com/p/CwIMoiSqWpF/","https://www.instagram.com/p/CxiGTKJS4ce/","https://www.instagram.com/p/CwAH3yoN_gD/","https://www.instagram.com/p/CxvbxJQvfMX/","https://www.instagram.com/p/CzQwEEnobki/","https://www.instagram.com/p/CzbQwc9PPuJ/","https://www.instagram.com/p/CzJcI0bS9vy/","https://www.instagram.com/p/Cy8WdxXPtkh/","https://www.instagram.com/p/CzJnYZLSw_i/","https://www.instagram.com/p/Cymku9RvhFo/","https://www.instagram.com/p/Cy3SvXDI2yJ/","https://www.instagram.com/p/CyyDwxcS-um/","https://www.instagram.com/p/CxxtGBoxIBI/","https://www.instagram.com/p/CyvDiGfLHVb/","https://www.instagram.com/p/CzMFIZNx5Lk/","https://www.instagram.com/p/CzERWVwSQcN/","https://www.instagram.com/p/CzL19y2o2kQ/","https://www.instagram.com/p/CzGF-uLS3c8/","https://www.instagram.com/p/CyY5DQ-Kvu7/","https://www.instagram.com/p/CxajPP3xPV3/","https://www.instagram.com/p/Cy-tHWxN4HB/","https://www.instagram.com/p/Cy_sH6-SGpy/","https://www.instagram.com/p/CzRerhrv--Y/","https://www.instagram.com/p/CyD1hsOLsxf/","https://www.instagram.com/p/CzIy8B4ruBF/","https://www.instagram.com/p/CzGhackxibE/","https://www.instagram.com/p/Cyn8OlPyeFg/","https://www.instagram.com/p/CzBSdecoSVQ/","https://www.instagram.com/p/Cx0aYbsvHrP/","https://www.instagram.com/p/CzK1VNNRsqe/","https://www.instagram.com/p/Cy-9PEDpAsR/","https://www.instagram.com/p/CwaDxDypL10/","https://www.instagram.com/p/CxT84m4qb4t/","https://www.instagram.com/p/CzEJ361s1TG/","https://www.instagram.com/p/CyFd0H2oYN0/","https://www.instagram.com/p/Cy3jYytJGQ9/","https://www.instagram.com/p/CzGOjSNrqEI/","https://www.instagram.com/p/CzBMw6rIUHa/","https://www.instagram.com/p/Cy1IsTAsJKQ/","https://www.instagram.com/p/CwGKZoHoG19/","https://www.instagram.com/p/Cy-GPTcyrcC/","https://www.instagram.com/p/CwZ4j43BfNm/","https://www.instagram.com/p/CyVebKYyv_d/","https://www.instagram.com/p/CyGhmCrqeax/","https://www.instagram.com/p/Cmd95H4BtX2/","https://www.instagram.com/p/Cv798PiA6kf/","https://www.instagram.com/p/CyFlIjGvdIv/","https://www.instagram.com/p/CwDSDuvsvSY/","https://www.instagram.com/p/Cx5aYsuPRlv/","https://www.instagram.com/p/CwPr-b7oAdK/","https://www.instagram.com/p/CyqfxmNhZVT/","https://www.instagram.com/p/Cyd6g7FNncG/","https://www.instagram.com/p/CvZkYh_s4J-/","https://www.instagram.com/p/CvRXHXCBMI8/","https://www.instagram.com/p/Cx-3HFvtrWS/","https://www.instagram.com/p/Cv95PP-vUWp/","https://www.instagram.com/p/Cvq8VFlNTa2/","https://www.instagram.com/p/CvYeJ3WNZV1/","https://www.instagram.com/p/Cw_KZanAw7t/","https://www.instagram.com/p/Cv9uh4EMKXz/","https://www.instagram.com/p/CxarlLsPJBg/","https://www.instagram.com/p/CxxFZ8UKyYf/","https://www.instagram.com/p/Cxc9PwEyY76/","https://www.instagram.com/p/Cx3CpbQMWhX/","https://www.instagram.com/p/CwsEMX0rPbF/","https://www.instagram.com/p/CvPwSsBNS7J/","https://www.instagram.com/p/Cwg44wkh4hx/","https://www.instagram.com/p/Cut3CeXMZul/","https://www.instagram.com/p/CvJ6ZnltWZE/","https://www.instagram.com/p/Cve0PagAyE-/","https://www.instagram.com/p/Cvi5jG6NGNA/","https://www.instagram.com/p/Cx0UnUkJUpT/","https://www.instagram.com/p/Cu87BbGu9CD/","https://www.instagram.com/p/Cxmj-jYoc83/","https://www.instagram.com/p/CwCEy8us19D/","https://www.instagram.com/p/CvhxqS3pPB-/","https://www.instagram.com/p/Cwmg7tTvU0M/","https://www.instagram.com/p/Cvur9PQN3kk/","https://www.instagram.com/p/Cw0RC7FoWxP/","https://www.instagram.com/p/CxIy4YOvmcT/","https://www.instagram.com/p/Cu8jZdeuD62/","https://www.instagram.com/p/CvP9H-dIIYH/","https://www.instagram.com/p/CwPIH_csBjp/","https://www.instagram.com/p/CvUCjORvbiA/","https://www.instagram.com/p/CwmOWjsPAHT/","https://www.instagram.com/p/CxEndvPyTyE/","https://www.instagram.com/p/CxK8huzprCV/","https://www.instagram.com/p/CutQ_HrAmO-/","https://www.instagram.com/p/CwaKVFrshuC/","https://www.instagram.com/p/Cu61fPVNEfx/","https://www.instagram.com/p/CvVCuH5hJKV/","https://www.instagram.com/p/CvLLigvBNwu/","https://www.instagram.com/p/CxTDoZTS2EM/","https://www.instagram.com/p/CwxsoQ0PKBR/","https://www.instagram.com/p/Cw9jUs_IITg/","https://www.instagram.com/p/CvKQ4CuoX58/","https://www.instagram.com/p/CwdIklNBNlK/","https://www.instagram.com/p/CwuD3mcv2ha/","https://www.instagram.com/p/Cw62u2XItBS/","https://www.instagram.com/p/CwwVqM2qp9W/","https://www.instagram.com/p/CwX3RVmAGtF/","https://www.instagram.com/p/CwZyRPOJHJ0/","https://www.instagram.com/p/CuXXVh9IW-4/","https://www.instagram.com/p/CwHpBjMMhp9/","https://www.instagram.com/p/Cw7QG9gyOE4/","https://www.instagram.com/p/Cv_iQ8_qM8V/","https://www.instagram.com/p/Cu1P_uEBmhj/","https://www.instagram.com/p/Cu4jmnsoKM_/","https://www.instagram.com/p/CuxL0MuBExJ/","https://www.instagram.com/p/Cw4MfAoIK0X/","https://www.instagram.com/p/CuSTW-sokZw/","https://www.instagram.com/p/CvH0WvTP5gb/","https://www.instagram.com/p/CuWxZHQg5Wv/","https://www.instagram.com/p/CxSfbEKxWTV/","https://www.instagram.com/p/CvHumAUoa1N/","https://www.instagram.com/p/CwK_EbGpQh7/","https://www.instagram.com/p/Cv7lBgiARbf/","https://www.instagram.com/p/CuZ_PtTovjx/","https://www.instagram.com/p/CxNngqlInM6/","https://www.instagram.com/p/CwXEQvsNi3T/","https://www.instagram.com/p/CxnTwHpBje6/","https://www.instagram.com/p/CwVfXzRJzGZ/","https://www.instagram.com/p/Cub3nNNvvXD/","https://www.instagram.com/p/Cub3P9nx82R/","https://www.instagram.com/p/CxSERmQy8qG/","https://www.instagram.com/p/CvKS5W3snTF/","https://www.instagram.com/p/CvKqgBmLcPV/","https://www.instagram.com/p/CxJTRQSSUrb/","https://www.instagram.com/p/CwsKAsqMQtB/","https://www.instagram.com/p/Cu9TSzqAxHM/","https://www.instagram.com/p/CuZYL5CAj-_/","https://www.instagram.com/p/CxYh3gcr45m/","https://www.instagram.com/p/CuZipritqRy/","https://www.instagram.com/p/CxdE9HjRgV3/","https://www.instagram.com/p/CwaSFBeNPMs/","https://www.instagram.com/p/CxaYihPoINd/","https://www.instagram.com/p/CvkaT20t0-v/","https://www.instagram.com/p/CxdcLoqINfN/","https://www.instagram.com/p/CxFlo7_LLyI/","https://www.instagram.com/p/CuUYbtpp10O/","https://www.instagram.com/p/Cxid_aoRY_s/","https://www.instagram.com/p/CxZ7rJuNdQP/","https://www.instagram.com/p/CvuVCCFsZHa/","https://www.instagram.com/p/CuozGEuABUn/","https://www.instagram.com/p/CvB3Kfdhp9z/","https://www.instagram.com/p/CvLceGkN9iM/","https://www.instagram.com/p/Cu_-H0VNjFC/","https://www.instagram.com/p/CwE3iMwKZ0N/","https://www.instagram.com/p/CxItbdJPBxy/","https://www.instagram.com/p/Cug3eGEp4Uz/","https://www.instagram.com/p/Cu8lLanoweZ/","https://www.instagram.com/p/CwJr3DUhRtB/","https://www.instagram.com/p/CvACn5EpVRS/","https://www.instagram.com/p/CuUuq6qo82V/","https://www.instagram.com/p/CxQ-UD4MwoY/","https://www.instagram.com/p/CuRmKBBAUV_/","https://www.instagram.com/p/CvfoT2FLTea/","https://www.instagram.com/p/CtouuxcglfS/","https://www.instagram.com/p/CurYs6ROFXy/","https://www.instagram.com/p/CvFSA_js1ex/","https://www.instagram.com/p/CwVJ3mGNDWf/"];

exports.handler = async (event, context) => {
  const randomRedirect = stringArray[Math.floor(Math.random() * stringArray.length)];

  return {
    statusCode: 302,
    headers: {
      Location: randomRedirect,
    },
    body: '', 
  };
};
