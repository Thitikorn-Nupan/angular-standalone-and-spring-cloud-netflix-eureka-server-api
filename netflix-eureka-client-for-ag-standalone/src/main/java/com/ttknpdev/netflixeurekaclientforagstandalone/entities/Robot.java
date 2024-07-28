package com.ttknpdev.netflixeurekaclientforagstandalone.entities;
/* For response from Robot-microservice api */
public class Robot {
    private Long rid;
    private String codename;
    private String releaseDate; // work like @Column(name = "release_date")
    private Double price;
    private Boolean status;

    public Robot(Long rid, String codename, String releaseDate, Double price, Boolean status) {
        this.rid = rid;
        this.codename = codename;
        this.releaseDate = releaseDate;
        this.price = price;
        this.status = status;
    }

    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }

    public String getCodename() {
        return codename;
    }

    public void setCodename(String codename) {
        this.codename = codename;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Robot{" +
                "rid=" + rid +
                ", codename='" + codename + '\'' +
                ", releaseDate='" + releaseDate + '\'' +
                ", price=" + price +
                ", status=" + status +
                '}';
    }
}
