#!/usr/bin/env python3
"""One-off patches for Sivaprakash Wealth static HTML."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

NAV_DROPDOWN = re.compile(
    r'<div class="nav-item dropdown">\s*'
    r'<a href="#" class="nav-link" data-bs-toggle="dropdown">\s*'
    r'<span class="dropdown-toggle">Pages</span>\s*</a>\s*'
    r'<div class="dropdown-menu">.*?</div>\s*</div>',
    re.DOTALL,
)

COPYRIGHT = re.compile(
    r'<div class="col-md-6 text-center text-md-end mb-md-0">\s*'
    r'<span class="text-body"><a href="#"[^>]*>.*?</a>, All right reserved\.</span>\s*</div>\s*'
    r'<div class="col-md-6 text-center text-md-start text-body">.*?</div>',
    re.DOTALL,
)

INSTAGRAM_COL = re.compile(
    r'<h4 class="mb-4 text-white">Instagram</h4>\s*<div class="row g-3">.*?</div>',
    re.DOTALL,
)

INSTAGRAM_REPL = (
    '<h4 class="mb-4 text-white">Connect</h4>\n'
    '                                        <p class="text-white mb-3">Social links will be added later. These buttons open the home page for now.</p>\n'
    '                                        <div class="d-flex flex-wrap gap-2">\n'
    '                                            <a href="index.html" class="btn btn-outline-light btn-sm rounded-pill">Facebook</a>\n'
    '                                            <a href="index.html" class="btn btn-outline-light btn-sm rounded-pill">YouTube</a>\n'
    '                                            <a href="index.html" class="btn btn-outline-light btn-sm rounded-pill">Instagram</a>\n'
    '                                            <a href="index.html" class="btn btn-outline-light btn-sm rounded-pill">LinkedIn</a>\n'
    "                                        </div>"
)

LANG_BLOCK = re.compile(
    r'<div class="dropdown ms-3">\s*'
    r'<a href="#" class="dropdown-toggle text-dark" data-bs-toggle="dropdown">.*?</a>\s*'
    r'<div class="dropdown-menu rounded">.*?</div>\s*</div>\s*',
    re.DOTALL,
)


def patch_common(t: str) -> str:
    t = NAV_DROPDOWN.sub(
        '<a href="FAQ.html" class="nav-item nav-link">FAQs</a>', t, count=1
    )
    t = COPYRIGHT.sub(
        '<div class="col-12 text-center">\n'
        '                        <span class="text-white small">&copy; Sivaprakash Wealth. All rights reserved.</span>\n'
        "                    </div>",
        t,
        count=1,
    )
    t = INSTAGRAM_COL.sub(INSTAGRAM_REPL, t, count=1)
    t = LANG_BLOCK.sub("", t, count=1)
    t = t.replace("fa-dollar-sign", "fa-rupee-sign")
    t = t.replace("Redhills, ", "")
    t = t.replace("Chennai — Redhills", "Chennai")
    t = t.replace("Small business owner, Redhills", "Small business owner, Chennai")
    t = re.sub(
        r"Providing expert insurance consultancy services with \d+\+ years of experience in LIC and General Insurance\. Contact us for personalized financial planning\.",
        "LIC and general insurance consulting in Chennai — 28+ years of experience. Contact us for a free consultation.",
        t,
    )
    t = t.replace("href=\"feature.html\"", 'href="index.html#features"')
    t = t.replace("href=\"team.html\"", "href=\"about.html\"")
    t = t.replace("href=\"testimonial.html\"", "href=\"index.html#testimonials\"")
    t = re.sub(
        r'<a class="btn p-0 text-primary me-3" href="#"',
        '<a class="btn p-0 text-primary me-3" href="index.html"',
        t,
    )
    t = re.sub(
        r'<a class="btn p-0 text-primary me-0" href="#"',
        '<a class="btn p-0 text-primary me-0" href="index.html"',
        t,
    )
    t = t.replace(
        '<a class="btn btn-md-square rounded-circle me-3" href="#" title="Facebook',
        '<a class="btn btn-md-square rounded-circle me-3" href="index.html" title="Facebook',
    )
    t = t.replace(
        '<a class="btn btn-md-square rounded-circle me-3" href="#" title="YouTube',
        '<a class="btn btn-md-square rounded-circle me-3" href="index.html" title="YouTube',
    )
    t = t.replace(
        '<a class="btn btn-md-square rounded-circle me-3" href="#" title="Instagram',
        '<a class="btn btn-md-square rounded-circle me-3" href="index.html" title="Instagram',
    )
    t = t.replace(
        '<a class="btn btn-md-square rounded-circle me-0" href="#" title="LinkedIn',
        '<a class="btn btn-md-square rounded-circle me-0" href="index.html" title="LinkedIn',
    )
    t = re.sub(
        r'<a class="btn btn-md-square rounded-circle me-3" href="#"><i class="fab fa-facebook-f"',
        '<a class="btn btn-md-square rounded-circle me-3" href="index.html"><i class="fab fa-facebook-f"',
        t,
    )
    t = re.sub(
        r'<a class="btn btn-md-square rounded-circle me-3" href="#"><i class="fab fa-twitter"',
        '<a class="btn btn-md-square rounded-circle me-3" href="index.html"><i class="fab fa-youtube"',
        t,
    )
    t = re.sub(
        r'<a class="btn btn-md-square rounded-circle me-3" href="#"><i class="fab fa-instagram"',
        '<a class="btn btn-md-square rounded-circle me-3" href="index.html"><i class="fab fa-instagram"',
        t,
    )
    t = re.sub(
        r'<a class="btn btn-md-square rounded-circle me-0" href="#"><i class="fab fa-linkedin-in"',
        '<a class="btn btn-md-square rounded-circle me-0" href="index.html"><i class="fab fa-linkedin-in"',
        t,
    )
    t = t.replace('href="#"><i class="fab fa-twitter"', 'href="index.html"><i class="fab fa-youtube"')
    t = re.sub(
        r'<a href="#" class="navbar-brand p-0">',
        '<a href="index.html" class="navbar-brand p-0">',
        t,
    )
    t = re.sub(
        r'<a href="#" class="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0">\s*Get a Quote</a>',
        '<a href="contact.html" class="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0">Get a Quote</a>',
        t,
    )
    t = re.sub(
        r'<a href="#" class="btn btn-light btn-lg-square rounded-circle position-relative wow tada"',
        '<a href="tel:+919884110537" class="btn btn-light btn-lg-square rounded-circle position-relative wow tada"',
        t,
    )
    t = re.sub(
        r'<a href="#" class="btn btn-lg-square rounded-circle position-relative wow tada"',
        '<a href="tel:+919884110537" class="btn btn-lg-square rounded-circle position-relative wow tada"',
        t,
    )
    t = t.replace(
        '<span class="text-body"><a href="#" class="border-bottom text-white">',
        '<span class="text-body"><a href="index.html" class="border-bottom text-white">',
    )
    t = t.replace("Nearly three decades", "28+ years")
    t = t.replace("30+ years in the insurance industry", "28+ years in the insurance industry")
    t = t.replace("For more than 28 years", "With 28+ years")
    t = t.replace("with 27+ years", "with 28+ years")
    t = t.replace("27+ years", "28+ years")
    t = re.sub(
        r'<a href="feature.html"',
        '<a href="index.html#features"',
        t,
    )
    t = re.sub(
        r'<li class="breadcrumb-item"><a href="#">Pages</a></li>\s*',
        "",
        t,
    )
    t = re.sub(
        r'<a href="#"><i class="fas fa-angle-right me-2"></i> About Us</a>',
        '<a href="about.html"><i class="fas fa-angle-right me-2"></i> About Us</a>',
        t,
    )
    t = re.sub(
        r'<a href="#"><i class="fas fa-angle-right me-2"></i> Features</a>',
        '<a href="index.html#features"><i class="fas fa-angle-right me-2"></i> Features</a>',
        t,
    )
    t = re.sub(
        r'<a href="#"><i class="fas fa-angle-right me-2"></i> Services</a>',
        '<a href="service.html"><i class="fas fa-angle-right me-2"></i> Services</a>',
        t,
    )
    t = re.sub(
        r"<a href=\"#\"><i class=\"fas fa-angle-right me-2\"></i> FAQ's</a>",
        '<a href="FAQ.html"><i class="fas fa-angle-right me-2"></i> FAQs</a>',
        t,
    )
    t = re.sub(
        r'<a href="#"><i class="fas fa-angle-right me-2"></i> Blogs</a>',
        '<a href="blog.html"><i class="fas fa-angle-right me-2"></i> Blogs</a>',
        t,
    )
    t = re.sub(
        r'<a href="#"><i class="fas fa-angle-right me-2"></i> Contact</a>',
        '<a href="contact.html"><i class="fas fa-angle-right me-2"></i> Contact</a>',
        t,
    )
    t = t.replace('Find A Location', "Chennai")
    t = re.sub(
        r'<a href="#" class="text-muted small"><i class="fas fa-map-marker-alt text-primary me-2"></i>Chennai</a>',
        '<a href="contact.html" class="text-muted small"><i class="fas fa-map-marker-alt text-primary me-2"></i>Chennai</a>',
        t,
    )
    return t


def remove_index_faq(t: str) -> str:
    return re.sub(
        r'<!-- FAQs Start -->.*?<!-- FAQs End -->\s*\n\s*',
        "<!-- FAQs: see FAQ.html -->\n        <div class=\"container-fluid bg-light py-5\">\n"
        '            <div class="container py-4 text-center">\n'
        '                <h4 class="text-primary mb-3">Have questions?</h4>\n'
        '                <p class="mb-4">Answers to common insurance and consultation questions are on our FAQs page.</p>\n'
        '                <a href="FAQ.html" class="btn btn-primary rounded-pill py-3 px-5">Read FAQs</a>\n'
        "            </div>\n        </div>\n        ",
        t,
        count=1,
        flags=re.DOTALL,
    )


def remove_about_faq(t: str) -> str:
    return re.sub(
        r'<!-- FAQs Start -->.*?<!-- FAQs End -->\s*\n\s*',
        "<!-- FAQs on FAQ.html only -->\n        ",
        t,
        count=1,
        flags=re.DOTALL,
    )


def remove_service_testimonial(t: str) -> str:
    return re.sub(
        r'<!-- Testimonial Start -->.*?<!-- Testimonial End -->\s*\n\s*',
        "<!-- Testimonials on index.html#testimonials -->\n        ",
        t,
        count=1,
        flags=re.DOTALL,
    )


def main():
    for path in sorted(ROOT.glob("*.html")):
        t = path.read_text(encoding="utf-8")
        orig = t
        t = patch_common(t)
        if path.name == "index.html":
            t = remove_index_faq(t)
            t = t.replace(
                "<!-- Feature Start -->",
                '<!-- Feature Start -->\n        <div id="features"></div>',
                1,
            )
            t = t.replace(
                "<!-- Testimonial Start -->",
                '<!-- Testimonial Start -->\n        <div id="testimonials"></div>',
                1,
            )
        if path.name == "about.html":
            t = remove_about_faq(t)
        if path.name == "service.html":
            t = remove_service_testimonial(t)
        if t != orig:
            path.write_text(t, encoding="utf-8")
            print("patched", path.name)


if __name__ == "__main__":
    main()
